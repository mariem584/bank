import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
import '../App.css'

const Business = () => {
  return (
    <section id='features' className={`flex justify-between mt-12 md:flex-row flex-col ${styles.paddingY}`}>

      <div className=''>
        <h1 className='text-white text-[48px] font-[600] font-Poppins'>
          <ul>
          <li>
          You do the business,
          </li>
          <li>
          we’ll handle the money.
            </li>
            </ul>

        </h1>
        <br /> <br />
        <h1 className='text-[#FFFFFFB2]  opacity-[70%] font-Poppins font-[400] leading-[30.6px] text-[18px] '>
          <ul>
            <li>
            With the right credit card, you can improve your financial life 
            </li>
            <li>
              by building credit, earning rewards and saving money. But
              
            </li>
            <li>
            with hundreds of credit cards on the market.
            </li>
          </ul>
        </h1><br/>
        <br /> 
      <Button/>
      </div> 

      <div className='pl-8'>
      <ul className='text-[#FFFFFF]  text-[18px]  font-[600] text-center   '>
          {features.map((features , index) =>
         (  
            <li key={features.id} className='  cursor-pointer mb-16 list '>
              <div className='flex'>
              <img className='bg-[#09977C1A]  rounded-full w-[50px] h-[65px] p-2 ' src={features.icon} alt="" />
                <h1 className='text-left pl-6 font-Poppins font-[600] text-[18px] '>{features.title} <br/> 
                <p className='text-[16px] font-[400] text-[#FFFFFFB2] opacity-[70%] leading-[24px] mt-2'>{ features.content}</p>
                
                </h1>  
                </div>
              
        </li>
              
        ))}
          </ul>
          </div>
      
    </section>
  )
}

export default Business