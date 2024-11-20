import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectDB from './db/connectToMongoDB.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
  
app.get('/', (req,res) => {res.send("Hello")})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on PORT ${PORT}`);
})
