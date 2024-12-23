import React from 'react'
import NoteContext from '../../Context/NoteContext'
import { useContext } from 'react';



const CancelOrAddBtn = () => {

    const {isShowForm, setIsShowForm, handleAdd} = useContext(NoteContext);
    const cancel=()=>{
       if (isShowForm) {
         setIsShowForm(false)
       }else{
        setIsShowForm(true)
       }
    }

  return (
    <div className='flex gap-5 absolute z-30 bottom-5 right-5'>
      <button className='bg-gray-400 text-white py-3 px-5 rounded-md hover:bg-gray-600 duration-75 ease-in-out' onClick={cancel}>cancel</button>
      <button className='bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-blue-700 duration-75 ease-in-out' onClick={handleAdd}>Add note</button>
    </div>
  )
}

export default CancelOrAddBtn
