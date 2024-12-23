import React from 'react'
import { FiBox } from "react-icons/fi";       // Box Icon
import { FiUser } from "react-icons/fi";      // Profile/User Icon
import { FiSearch } from "react-icons/fi";    // Search Icon

const Navbar = () => {
  return (
    <div className=''>
      <div className='nav bg-gray-400 p-4 flex justify-between items-center'>
        <label  htmlFor="" className=' p-2 border-2 rounded-3xl flex items-center gap-1 focus:border-none active:border-none'>
            <FiSearch className='opacity-25' size={20} />
         <input type="text" name="" id="" placeholder='search notes' className='placeholder:text-black bg-inherit outline-none placeholder-shown:opacity-20' />
        </label>
        <div className='flex gap-5'>
            <div className="structure">
              <FiBox size={20} />
            </div>
            <div className="profile border-2 border-black rounded-full hover:bg-white duration-75 ease-in-out">
              <FiUser size={20}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
