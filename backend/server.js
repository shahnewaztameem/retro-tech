import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API' })
})

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// 404 routing error handler
app.use(notFound)

// custom error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`)
})
