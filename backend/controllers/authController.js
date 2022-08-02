const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

/* Remember that when you use the authMiddleware (verifyToken), you are assigning 
   the user to the req.user body which can be used throughout the application
*/

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    })

    try {
        if(newUser){
            res.status(201).json({
                _id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                token: generateToken(newUser._id, newUser.isAdmin)
            })
        } 
    } catch (error) {
       res.status(500).json(error) 
    }
    
})

const loginUser = asyncHandler(async(req, res) => {
   const {email, password} = req.body

   const user = await User.findOne({email})

   if(user && (await bcrypt.compare(password, user.password))){ 
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id, user.isAdmin)
        })
   } else {
     res.status(400)
     throw new Error("Invalid login credentials")
   }
   res.json({ message: 'User has been logged in'})
})

const generateToken = (id, isAdmin) => {
  return jwt.sign(
    { 
        id,
        isAdmin: isAdmin  
    }, 
    process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
    registerUser,
    loginUser
}