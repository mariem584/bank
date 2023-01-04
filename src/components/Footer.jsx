import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'
import '../App.css'

const Footer = () => {
  return ( 
    <div className='flex-col'>
    <div className='flex footer w-full bg-[black]  footerLine  '>
      
      <div className='ml-[17%] bg-[black]  '>
        <img  src={logo} alt="" />
        <h1 className='text-[#FFFFFFB2]  opacity-[70%] font-Poppins font-[400] leading-[30.6px] text-[18px] ml-7 mt-3'>
          <ul>
            <li>
            A new way to make the payments 
            </li>
            <li>
            easy, reliable and secure.
            </li>
          </ul>
        </h1>
      </div>
      
      
      <div className='flex justify-between ml-[20%] p-5 ' >
{
          footerLinks.map((footerLinks) => (
            <div key={footerLinks.key}>
              <h4 className='text-[#FFFFFF]  text-[18px]  font-[500] mr-32 leading-[27px] '>
                {footerLinks.title}
              </h4>
              <ul  className='text-[#FFFFFFB2]  opacity-[70%] font-Poppins font-[400] leading-[30.6px] text-[16px]  ' >
          
                {
                  footerLinks.links.map((link , index) => (
                    <li className='mb-2 mt-2' key={link.name}>
                      {link.name}
                    </li>
        
                  ))
                }
              </ul>
           </div>
          ))
        }

      </div>

      </div>
{/* <img src={logo} alt="" /> */}
      </div>
    
    
  )
}

export default Footer