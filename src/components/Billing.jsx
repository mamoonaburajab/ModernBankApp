import React from 'react'
import { bill ,apple , google } from '../assets'
import styles from '../style'


const Billing = () => {
  return (
    <section className='flex flex-row justify-around flex-wrap'>
      <div>
        <img src={bill} alt=""  className='w-[100%] h-[100%] relative max-w-[530px]'/>
      </div>
      <div className='flex flex-col justify-evenly mb-10'>
        <h1 className='text-white font-poppins font-semibold text-[48px] mb-10' >
          Easily control your <br /> billing & invoicing.
        </h1>
        <p className='text-white font-poppins text-[18px] mb-10 max-w-[430px]'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className={` flex flex-row item-start mt-15`}>
          <span>
            <img src={apple} alt="test" />
          </span>
          <span>
            <img src={google} alt="test" className='ml-10' />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Billing