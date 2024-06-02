import React from 'react'
import ProductCard from '@/components/cards/ProductCard'

type Props = {}

const BestSellersUI = (props: Props) => {
  return (
    <div className='_container'>
        <p className='__playfair text-4xl md:text-5xl text-center pt-14 pb-12'>Shop Best Sellers</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                ProductsData?.length > 0 ? 
                ProductsData?.map((item:any,i:any)=>(
                    <ProductCard key={i} item={item}/>
                ))
                :
                <></>
            }
        </div>
    </div>
  )
}

export default BestSellersUI

const ProductsData = [
    {
        title:'TOOTHPASTE BITS FLUORIDE-FREE',
        price:'8.22',
        discountPrice:'',
        varient:'',
        img:'/images/products/prod4.webp',
        slug:'',
        url:'',
    },
    {
        title:'TOOTHPASTE BITS WITH FLUORIDE',
        price:'3.44',
        discountPrice:'',
        varient:'',
        img:'/images/products/prod3.webp',
        slug:'',
        url:'',
    },
    {
        title:'DEODORANT SET',
        price:'9.99',
        discountPrice:'6.99',
        varient:'',
        img:'/images/products/prod2.webp',
        slug:'',
        url:'',
    },
    {
        title:'MOUTHWASH BITS',
        price:'15.99',
        discountPrice:'8.99',
        varient:'',
        img:'/images/products/prod1.webp',
        slug:'',
        url:'',
    }
]