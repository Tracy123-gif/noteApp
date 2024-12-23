import React from 'react'
import Navbar from '../components/Navbar'
import NotesContainer from '../components/NotesContainer'
import AddNoteBtn from '../components/AddNoteBtn'
import OpenAddForm from '../components/OpenAddForm'

const Home = () => {
  return (
    <div className=''>
        <Navbar />
       <div className='px-5'>
       <NotesContainer />
       <AddNoteBtn />
       </div>
       <OpenAddForm />
    </div>
  )
}

export default Home
