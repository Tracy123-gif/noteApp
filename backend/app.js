import connectDB from "./db.js";
import express from 'express'
import addNoteroutes from "./routes/addNote.js";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/notes', addNoteroutes )
connectDB()



const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
   console.log( `server running on port ${PORT}`);
   
})