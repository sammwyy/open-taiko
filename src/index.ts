import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'

import categoriesRoutes from './modules/categories/categories.routes'
import configRoutes from './modules/config/config.routes'
import scoresRoutes from './modules/scores/scores.routes'
import songsRoutes from './modules/songs/songs.routes'

import frontendRoutes from './modules/frontend/frontend.routes'

import gateway from './gateway'

// Setup .env file
dotenv.config()

// Connect to database
mongoose.connect(process.env['MONGODB_URI']).then(() => {
  console.log('MongoDB database connected.')
})

// Initialize http server
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api/categories', categoriesRoutes)
app.use('/api/config', configRoutes)
app.use('/api/scores', scoresRoutes)
app.use('/api/songs', songsRoutes)
app.use('/', frontendRoutes)

const server = app.listen(process.env['PORT'], () => {
  console.log('Application listening at port ' + process.env['PORT'])
})

gateway(server)
