import React, { useContext } from 'react'
import { CgAdd } from 'react-icons/cg'
import NoteContext from '../../Context/NoteContext';
import CancelOrAddBtn from './cancelOrAddBtn';
const AddNoteBtn = () => {

  const {isShowForm, setIsShowForm} = useContext(NoteContext);

  const handleShow =()=>{
   if (isShowForm) {
    setIsShowForm(false)
   }else[
    setIsShowForm(true)
   ]
  }
  return (
    <div>
      {
        isShowForm? <CancelOrAddBtn />
         :
        <button >
        <CgAdd size={60} onClick={handleShow} color='white' className='absolute bottom-3 right-4  bg-gray-800 rounded-full z-30' />
      </button>
      }
    </div>
  )
}

export default AddNoteBtn
