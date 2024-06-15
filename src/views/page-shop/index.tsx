import React from 'react'
import ProductCard from '@/components/cards/ProductCard'
import ProdGptData from '@/Datas/ProdGptData'
type Props = {
  data?:any;
}

const ShopUI = ({data}: Props) => {
  return (
    <div className='_container pt-[70px]'>
      <p className='__playfair text-4xl md:text-5xl text-center pt-14 pb-12'>Shop</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {
              data?.map((item:any,i:any)=>(
                  <ProductCard key={i} product={item} />
              ))
          }
      </div>
    </div>
  )
}

export default ShopUI