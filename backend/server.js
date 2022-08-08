const express = require('express')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const cors = require("cors")

connectDB(); 

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/user')) 
app.use('/api/products', require('./routes/product'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/orders', require('./routes/order'))
app.use('/api/checkout', require("./routes/stripe"))

app.listen(port, () => console.log(`Server has started on ${port}`)); 