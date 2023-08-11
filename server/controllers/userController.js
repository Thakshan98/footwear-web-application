const  User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");
const asyncHandler =require("express-async-handler");

const authUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSystemAdmin: user.isSystemAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
};


const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  
  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    const token = generateToken(user._id);

    res.status(201).json({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSystemAdmin: user.isSystemAdmin,
   
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
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
    await user.remove()
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
}
