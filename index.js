// external imports 
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')


// internal imports 
const courseRouter = require('./routers/courserouter')

const app = express()

const port = process.env.PORT || 8000;

// set up middlewares 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))



// database connection  
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qjdtxlm.mongodb.net/creative_mind?retryWrites=true&w=majority`)
    .then(res => console.log('database connected successfully'))
    .catch(err => console.log(err))


// router setup 
app.use('/creative-mind', courseRouter)



app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Creative Mind' })
})


app.listen(port, () => {
    console.log('App is running at localhost : 8000')
})



