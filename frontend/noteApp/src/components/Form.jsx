import React, { useContext } from 'react'
import NoteContext from '../../Context/NoteContext'
import axios from 'axios'


const Form = () => {

    const { title, body, setTitle, setBody} = useContext(NoteContext)
console.log(title);




  return (
        <form action="" className=' p-10'>
        <div className="flex flex-col gap-10">
        <label htmlFor="">
            <input type="text" placeholder='Title' value={title} className=' text-4xl bg-transparent outline-none border-b-2 border-white text-white' onChange={(e)=> setTitle(e.target.value)} />
         </label>
         <label htmlFor="">
            <textarea cols={100} rows={15}  type="text" placeholder='write note here....' value={body} className='h-fit resize-none outline-none bg-inherit text-white ' onChange={(e)=>setBody
               (e.target.value)
            }  />

         </label>
        </div>
       </form>
  )
}

export default Form
