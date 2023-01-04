import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <button className=' rounded-full flex circle  p-[40px]   absolute left-[750px] bottom-[49%] z-[2]   '>
     <ul className='getStarted font-Poppins font-[500] text-[18px] ' >
      <li className='flex'>Get <img className='ml-2' src={arrowUp} alt="" /> </li>
      <li>Started</li>
      </ul>
    </button>
   
  )
}

export default GetStarted