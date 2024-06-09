import React from 'react'
import ProductCard from '@/components/cards/ProductCard'
import ProdGptData from '@/Datas/ProdGptData'
type Props = {}

const ShopUI = (props: Props) => {
  return (
    <div className='_container pt-[70px]'>
      {/* <div className='grid grid-cols-4 gap-3'>
          {
              ProdGptData?.map((item:any,i:any)=>(
                  <ProductCard key={i} item={item}/>
              ))
          }
      </div> */}
    </div>
  )
}

export default ShopUI