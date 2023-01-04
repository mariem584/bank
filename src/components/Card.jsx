import React from 'react'
import Button from './Button'
import styles from '../style'
import { card } from '../assets'

const Card = () => {
  return (
    <section id='features' className={`flex justify-between mt-12 md:flex-row flex-col ${styles.paddingY}`}>

    <div className=''>
      <h1 className='text-white text-[48px] font-[600] font-Poppins'>
        <ul>
        <li>
        Find a better card deal 
        </li>
        <li>
        in few easy steps.
          </li>
          </ul>

      </h1>
      <br /> 
      <h1 className='text-[#FFFFFFB2]  opacity-[70%] font-Poppins font-[400] leading-[30.6px] text-[18px] '>
        <ul>
          <li>
          Arcu tortor, purus in mattis at sed integer faucibus. </li>
          <li>
          Aliquet quis aliquet eget mauris tortor.ç Aliquet 
          
            
          </li>
          <li>
          ultrices ac, ametau.
          </li>
        </ul>
      </h1><br/>
     
    <Button/>
      </div> 

      <div>
        <img className='w-[100%] h-[400px] -mt-[10%]' src={card} alt="" />
      </div>

      </section>
  )
}

export default Card