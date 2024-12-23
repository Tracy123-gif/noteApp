import React from 'react'
import Home from './pages/Home'
import { NoteContextProvider } from '../Context/NoteContext'

const App = () => {
  return (
    <div>
    <NoteContextProvider>
    <Home />
    </NoteContextProvider>
    </div>
  )
}

export default App
