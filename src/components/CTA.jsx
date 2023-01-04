import React from 'react'
import styles from '../style'
import Button from './Button'
import '../App.css'

const CTA = () => {
  return (
    <section className={`flex justify-around mt-12 md:flex-row flex-col ${styles.paddingY} cta `} >
<div>
      <h1 className='text-white text-[48px] font-[600] font-Poppins'>
      Let’s try our service now!
        </h1> 
        <br /> 
        <ul className='text-[#FFFFFFB2]  opacity-[70%] font-Poppins font-[400] leading-[30.6px] text-[18px] ' >
          <li>
          Everything you need to accept card payments
          </li>
          <li>and grow your business anywhere on the planet.</li>
        </ul>
      </div>
       <div className='mt-20 ml-[-18%]'>
        <Button />
        </div>
    </section>
  )
}

export default CTA