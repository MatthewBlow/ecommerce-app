const express = require('express')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001

connectDB(); 

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/user')) 
// app.use('/api/categories')
// app.use('/api/products')

app.listen(port, () => console.log(`Server has started on ${port}`)); 