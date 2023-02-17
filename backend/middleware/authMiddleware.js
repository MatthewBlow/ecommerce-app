const jwt = require('jsonwebtoken')

// Function the verify JWT
const verifyToken = (req, res, next) => {
  // Get the JWT from the header
  const authHeader = req.headers.token;

  // Check if JWT is present, if not then throw error
  if(authHeader){
    // Split token from word 'Bearer'
    const token = authHeader.split(" ")[1]

    // Verify the token with the secret key to decode the JWT
    // If error, return an 403 error
    // If valid, assign the user to the request
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) res.status(403).json("Token is not valid!")
        req.user = user
        next()
    })
  } else {
    return res.status(401).json("You are not authenticated!")
  }
}

// Uses verifyToken method followed by validating if the verified user ID is the same as the params ID
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if(req.user.id === req.params.id){
        next()
      } else {
        res.status(403).json("You are not allowed to do that")
      }
    })
}

// Uses verify token method followed by checking if a user is an admin 
const verifyTokenAndAdmin = (req, res, next) =>{
  verifyToken(req, res, () => {
    if(req.user.isAdmin){
      next()
    } else {
      res.status(403).json("You are not allowed to do that")
    }
  })
}

module.exports = { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken }