import React from 'react'
import { apple, google, bill } from '../assets'
import styles from '../style'
import '../index.css'
const Billing = () => {
  return (
    <section className={`flex justify-evenly  mt-12 md:flex-row flex-col ${styles.paddingY}`} >
      <div style={{ marginLeft: '-15%' }}>
        <img className='w-[600px] h-[600px]  ' src={bill} alt="" />
      
      </div>
      <div >
        <ul className='font-Poppins  text-[48px]  font-[600] text-[#FFFFFF]  leading-[76.8px]'>
          <li>Easily control your </li>
          <li>billing & invoicing.</li>
        </ul>
        <br/>
        <ul className='text-[18px] text-[#FFFFFFB2] opacity-[70%] font-Poppins font-[400] leading-[28.8px]'>
          <li>
          Elit enim sed massa etiam. Mauris eu adipiscing
          </li>
          <li>
          ultrices ametodio aenean neque. Fusce ipsum orci
          </li>
          <li>
          rhoncus aliporttitor integer platea placerat.
          </li>
        </ul>
        <br /> <br />
        <div className='flex justify-start cursor-pointer '>
        <img className='mr-5' src={apple} alt="" /> 
          <img src={google} alt="" />
          </div>
      </div>
    </section>
  )
}

export default Billing