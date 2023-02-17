const express = require('express')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const cors = require("cors")
require('dotenv').config()

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')

connectDB(); 

const app = express();

// Needed for POST and PUT requests to allow server to recognise the data as a JSON object
app.use(express.json())

// Needed for POST and PUT requests to allow server to recognise the data as a string or array
app.use(express.urlencoded({ extended: false }))

// Using CORS to make our server only accessible from our frontend
app.use(cors({
    origin: process.env.FRONTEND_URL
})) 

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute) 
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout', stripeRoute)

app.listen(port, () => console.log(`Server has started on ${port}`)); 