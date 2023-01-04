import React from 'react'
import style from '../style.js'
import '../App.css'
import GetStarted from './GetStarted.jsx'
import {robot ,discount} from '../assets'
const Hero = () => {
  return (
    <section id='home' className={`flex mt-12 md:flex-row flex-col ${style.paddingY}`}>
      <div className='flex-col  mt-20'>
        <div style={{backgroundImage:`linear-gradient(125.17deg, #272727 0%, #11101D 100%)`}} className='flex rounded-[10px] ml-0 p-1 w-[60%]   xl:ml-0  ml-14  '>        
        <img className='w-[25px] h-[25px] mr-3' src={discount} alt="" />
        <h1 className='text-white text-[16px]  '>20% <span className='opacity-50'>DISCOUNT FOR 1</span>  MONTH <span className='opacity-50'> ACCOUNT </span></h1>
        </div>
        <br/>
        <div>
        
          <ul className=' text-white text-[72px] font-Poppins font-[600] flex-row'>
            <li className='  '>
              The Next   
              
            </li> 
            <li style={{}} className='hero flex  '>Generation <GetStarted/> </li>
            <li>Payment Method.</li>
           
          </ul>
          

        </div>
        <div>

          <ul className='text-[18px] text-[#FFFFFFB2] font-Poppins mt-12 font-[400] opacity-[70%]  leading-[30.6px]'>
            <li>
              Our team of experts uses a methodology to identify    
              
            </li>
            <li>the credit cards most likely to fit your needs.</li>
            <li>We examine annual percentage rates, annual fees.</li>
         </ul>
        </div>
      </div>
      
      <div className={`flex-1  flex ${style.flexCenter} relative`}> 
        <img className='w-[100%] ]   z-[5]  ' src={robot} alt="" />
        <div className=' absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient'></div>
        <div className=' absolute z-[1] w-[80%] h-[80%] bottom-40  white__gradient'></div>
        <div className=' absolute z-[0] w-[50%] h-[50%] bottom-20 right-20  blue__gradient'></div>

      </div>
    </section>
  )
}

export default Hero