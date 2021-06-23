import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API' })
})

app.use('/api/posts', postRoutes)

app.listen(PORT, () => {
  console.log('App listening on port 3000!')
})
