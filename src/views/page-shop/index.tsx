import ProductCard from '@/components/cards/ProductCard'
import React from 'react'

type Props = {}

const ShopUI = (props: Props) => {
  return (
    <div className='_container pt-[70px]'>
      <div className='grid grid-cols-4 gap-3'>
          {
              [...Array(20)].map((i:any)=>(
                  <ProductCard key={i}/>
              ))
          }
      </div>
    </div>
  )
}

export default ShopUI