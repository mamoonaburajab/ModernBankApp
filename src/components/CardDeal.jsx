import React from 'react'
import Button from './Button'
import { card } from '../assets'
import styles from '../style'
const CardDeal = () => {
  return (
    <section className='flex mt-20 justify-around flex-row flex-wrap max-w-[1170px]'>
      <div className='max-w-[600px] mb-14'>
        <h1 className='text-white font-poppins font-semibold text-[48px] mb-10'>Find a better card deal in few easy steps.</h1>
        <p className='text-white font-italic text-[18px] max-w-[500px] mb-10'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button/>
      </div>
      <div>
        <img src={card} alt="" className='w-[100%] h-[100%] relative max-w-[513px] '
        />
      </div>
    </section>
  )
}

export default CardDeal