import React, { useEffect, useState } from 'react'
import Note from './Note'
import axios from 'axios'
const NotesContainer = () => {

  const [notes, setNotes ] = useState([])

  

  useEffect(()=>{
    const getNotes = async ()=>{
       const response = await axios.get('http://localhost:8000/notes/notes')
       setNotes(response.data)
    }
    getNotes()
  }, [])

  console.log(notes);



  return (
    <div className='p-4 h-full border-2  w-full  mt-10'>
      {
        notes.length > 0 ? <div className='grid lg:grid-cols-3 gap-6 sm:grid-col-1 justify-center items-center '>{notes.map((note, key)=>(
          <Note key={note.id} noteData={note}  />
        ))}</div> :
        <h1 className='text-4xl text-center'>no notes</h1>
      }
    </div>
  )
}

export default NotesContainer
