const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer"); // Import Nodemailer

const authUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    console.log(user)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSystemAdmin: user.isSystemAdmin,
      token: generateToken(user._id),
      isVerified : user.isVerified,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
};

const verifyEmail = async (req, res) => { 
  const { email, token } = req.body;
  try{  
    const user = await User.findById(token);  
    if(user && user.email === email){
      user.isVerified = true;
      await user.save();
      res.status(200).json({ status: true });
    }else{
      res.status(200).json({ status: false });
    }  
  }catch(error){
    res.status(200).json({ status: false });
  }

}

// Create a Nodemailer transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: "gmail", // Example: 'Gmail'
  auth: {
    user: "tokenrek@gmail.com",
    pass: "cmpu mpdf dytk dbyl",
  },
});

const sendVerificationEmail = async (email, verificationToken) => {
  // Email content
  const mailOptions = {
    from: "tokenrek@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `Click the following link to verify your email: http://localhost:3000/verify-user/${email}/${verificationToken}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Generate a verification token
  const verificationToken = generateToken(email);

  const user = await User.create({
    name,
    email,
    password,
    verificationToken, // Store the token in the user document
  });

  if (user) {
    // Send the verification email
    sendVerificationEmail(email, user._id);

    const token = generateToken(user._id);

    res.status(201).json({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSystemAdmin: user.isSystemAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};



const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSystemAdmin: user.isSystemAdmin,
      isVerified: user.isVerified,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
};


const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id)
  const currentPassword = req.body.currentPassword

  if (user && (await user.matchPassword(currentPassword))) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(401)
    throw new Error('Your current password is incorrect')
  }
};



const getUsers = async (req, res) => {

  const sort = { length: -1 , createdAt: -1};
  const users = await User.find({}).sort(sort)
  res.json(users)
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.deleteOne()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
};


const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
};


const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin
 

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,

    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
};

module.exports =  {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  verifyEmail,
}
