const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
require('./DB/dbConnection')

const app = express()

// Enable CORS for all routes
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/get-logs', require('./components/read-file/readfile.controller'))
app.use('/customer', require('./components/login-signUp/login-signup.controller'))

app.listen(5000,()=>{
    console.log("server listning on port number 5000")
})