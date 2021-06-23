import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API' })
})

app.use('/api/posts', postRoutes)

// 404 routing error handler
app.use(notFound)

// custom error handler
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`)
})
