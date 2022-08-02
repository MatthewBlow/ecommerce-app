const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const updateUser = async(req, res) => {
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        req.body.password = hashedPassword
    }

    try{
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
            $set: req.body
        },
        {new:true}
    );
    res.status(200).json(updatedUser)
    }catch(error){
     res.status(500).json(error);
    }
}

const deleteUser = async(req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted...")
  } catch (error) {
    res.status(500).json(error)
  }
}

const getUser = async(req, res) => {
    try {
      const user = await User.findById(req.params.id)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  }

const getAllUsers = async (req, res) => {
    try {
      const allUsers = await User.find()
      res.status(200).json(allUsers)
    } catch (error) {
      res.status(500).json(error)
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
}