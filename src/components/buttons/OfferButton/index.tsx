'use client'
import React from 'react'
import useModalStore from '@/stores/useModalStore'

type Props = {}

const OfferButton = (props: Props) => {
  const {openModal}:any = useModalStore()
  
  return (
    <div className='fixed top-[90%] left-[8%]'>
        <button onClick={openModal} className='bg-[#72f2c7] px-[10px] py-[6px] border border-black text-sm'>Get Offer</button>
    </div>
  )
}

export default OfferButton