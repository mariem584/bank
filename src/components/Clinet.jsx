import React from 'react'
import { clients } from '../constants'

const Clinet = () => {
  return (
    <div className='flex justify-between'>
      {clients.map((client) => (
        <img className=' w-[150px] h-[50px] ml-[-5%]'  src={client.logo} alt="" />
      ))}
    </div>
  )
}

export default Clinet