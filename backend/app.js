import connectDB from "./db.js";
import express from 'express'
import addNoteroutes from "./routes/addNote.js";

const app = express()
app.use(express.json())
app.use('/notes', addNoteroutes )
connectDB()



const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
   console.log( `server running on port ${PORT}`);
   
})