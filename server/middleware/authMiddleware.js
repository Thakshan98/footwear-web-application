const jwt = require("jsonwebtoken");

const User = require("../models/userModel.js");

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, "secret")

      req.user = await User.findById(decoded._id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
};


const systemAdmin = (req, res, next) => {
  if (req.user && req.user.isSystemAdmin ) {
    next()
  } else if (req.user && req.user.isAdmin) {
    next()
  } 
  
   else {
    res.status(401)
    throw new Error('Not authorized as an system admin')
  }
}


module.exports = { protect, systemAdmin };
