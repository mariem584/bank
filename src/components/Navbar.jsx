import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks} from '../constants'
const Navbar = () =>
{
  const [icon, setIcon] = useState(false) 
  return (
      <nav className='pt-8 flex justify-between w-full  '>
          <img src={logo} className='w-32 ' alt='' />
          <ul className='text-[#FFFFFF] flex justify-between text-[16px] font-Poppins font-[600] items-center sm:flex hidden'>
          {navLinks.map((navLinks , index) =>
         (  
        <li key={navLinks.id} className=' mr-10 cursor-pointer'>
      <h1>{navLinks.title} </h1>  
        </li>
              
        ))}
          </ul>
          
          <div className='sm:hidden flex '>
              <img src={icon ? close : menu} alt="" className='w-[28px] h-[28px]'
              
                  onClick={() => setIcon((prev) => !prev)} />
          </div>

          <div className={`${icon ? 'flex' : 'hidden'} box-border mx-4 my-0  bg-gradient-to-r from-gray-600 to-black p-6 absolute top-20 right-0 rounded-xl  w-min-[140px] `}>
          <ul className='text-[#FFFFFF]  text-[18px] font-sans font-[600] text-center  ml-5'>
          {navLinks.map((navLinks , index) =>
         (  
        <li key={navLinks.id} className='  cursor-pointer'>
        <h1>{navLinks.title} </h1>  
        </li>
              
        ))}
          </ul>
          </div>
    </nav>
  )
}

export default Navbar