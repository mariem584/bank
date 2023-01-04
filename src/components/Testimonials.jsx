import React from 'react'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { feedback } from '../constants'

const Testimonials = () => {
  return (
    <section>
      
      <div className={`flex justify-between mt-12 md:flex-row flex-col ${styles.paddingY}`}>
      <div className=''>
        <h1 className='text-white text-[48px] font-[600] font-Poppins'>
          <ul>
          <li>
          What people are 
          </li>
          <li>
          saying about us
            </li>
            </ul>

          </h1>
        </div>
        
        <h1 className='text-[#FFFFFFB2]  opacity-[70%] font-Poppins font-[400] leading-[30.6px] text-[20px] mt-12 '>
          <ul>
            <li> 
            Everything you need to accept card payments  </li>
            <li>
            and grow your business anywhere on the planet.
            </li>
              
            
          
          </ul>
        </h1><br/>
        
     
        
      </div>
      <div className='flex  justify-between'>
        
        {feedback.map((card) =>
        (
          <FeedbackCard key={card.id} {...card} /> 
        ))}
     </div>
   </section>
  )
}

export default Testimonials