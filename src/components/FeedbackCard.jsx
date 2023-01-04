import React from 'react'
import { quotes } from '../assets'
import '../App.css'


const FeedbackCard = ({content ,name ,title ,img}) => {
  return (
    <div className=' feedback  '>
      <img src={quotes} alt="" />
      <br /> <br />
      <h1  className='text-[18px] text-[#FFFFFF] font-[400] font-Poppins  leading-[32.4px] tracking-[2%] box-border w-[50%]'>
      {content}
      </h1>
      <br/>
      <div className='flex relative '>
        <img className='w-[50px] h-[50px] mr-3' src={img} alt="" /> 
        <h1 className='text-[20px] text-[#FFFFFF] font-[400] font-Poppins  leading-[32.4px] tracking-[2%]'>
          {name} <br />
           <span className='text-[16px] text-[#FFFFFF] opacity-[0.5] absolute top-[60%] '>{title}</span></h1>
        
        
</div>
    </div>
  )
}

export default FeedbackCard