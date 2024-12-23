import React, { createContext, useState } from 'react';
import axios from 'axios'

const NoteContext = createContext(); // Updated to PascalCase

export const NoteContextProvider = ({ children }) => {
  const [isShowForm, setIsShowForm] = useState(false); 

  // const [noteInput, setNoteInput ] =  useState({ title:'', note:''})
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/notes/createNote', { title, body });
      setIsShowForm(false);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  
  

  return (
    <NoteContext.Provider value={{ isShowForm, setIsShowForm, body, setBody, title, setTitle, handleAdd }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext; // Export the context for use in components
