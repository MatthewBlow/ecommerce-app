const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

/* Remember that when you use the authMiddleware (verifyToken), you are assigning 
   the user to the req.user body which can be used throughout the application
*/

const registerUser = asyncHandler(async (req, res) => {
    // Destructure req.body and pull properties 
    const { username, email, password } = req.body

    // If any property not present, throw error
    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please fill all fields')
    }

    // Check if user exists using mongoose
    const userExists = await User.findOne({email})

    // If user exists throw error
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Add salt and hash password provided in req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new user with the properties from req.body
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    })

    // If new user has been created, respond with the JSON of new user
    // Generate jwt for user once it has been created using the generateToken method
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
    // Destructure req.body and pull properties  
   const {email, password} = req.body

   // Check if user exists using mongoose
   const user = await User.findOne({email})

   // If user exists, use brycpt to compare the plain text password with the hashed password
   // If successfull, respond with the body of the user in JSON and generate a JWT
   // Else throw an error saying invalid credentials
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
 //  res.json({ message: 'User has been logged in'})
})

 // Method to generate and sign a JWT with the user._id 
 // Admin property also added in case admin wants to delete a user
 // Expires after 30 days, meaning user will need to log in again after this 
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