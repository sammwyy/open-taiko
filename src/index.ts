import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

// Setup .env file
dotenv.config()

// Connect to database
mongoose.connect(process.env['MONGODB_URI']).then(() => {
  console.log('MongoDB database connected.')
})

// Initialize http server
const app = express()

app.listen(process.env['PORT'], () => {
  console.log('Application listening at port ' + process.env['PORT'])
})
