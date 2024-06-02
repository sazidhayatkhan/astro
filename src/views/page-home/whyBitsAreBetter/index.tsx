import React from 'react'
import Image from 'next/image'
import { IoHandLeftOutline } from 'react-icons/io5'
import { MdOutlineStarOutline } from 'react-icons/md'
import { FaBacterium, FaEarthAmericas, FaSink } from 'react-icons/fa6'
import { BsSuitcase } from 'react-icons/bs'
type Props = {}

const WhyBitsAreBetterUI = (props: Props) => {
  return (
    <div className='_container'>
        <p className='__playfair text-4xl md:text-5xl text-center pt-14 pb-12'>Why Bits are Better</p>
        <div className='flex gap-2'>
            <div className='w-[40%]'>
                {
                    PromoData?.length > 0 ? 
                     PromoData?.slice(0,3)?.map((item:any,i:any)=>(
                        <div className='pb-12'>
                            <div className='text-5xl flex justify-center'>{item?.icon}</div>
                            <p className='text-xl text-center py-3'>{item?.title}</p>
                            <p className='text-xs text-center'>{item?.subTitle}</p>
                        </div>
                     ))
                     :
                     <></>

                }
            </div>
            <div>
                <Image
                    src="/images/middleimg.webp"
                    alt="middle-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-[600px] object-cover"
                />
            </div>
            <div className='w-[40%]'>
                {
                    PromoData?.length > 0 ? 
                     PromoData?.slice(3,6)?.map((item:any,i:any)=>(
                        <div className='pb-12'>
                            <div className='text-5xl flex justify-center'>{item?.icon}</div>
                            <p className='text-xl text-center py-3'>{item?.title}</p>
                            <p className='text-xs text-center'>{item?.subTitle}</p>
                        </div>
                     ))
                     :
                     <></>

                }
            </div>
        </div>
    </div>
  )
}

export default WhyBitsAreBetterUI

const PromoData = [
    {
        title:"PERFECTLY PORTIONED",
        subTitle:"Stop wasting money by using more toothpaste than you need.",
        icon:<IoHandLeftOutline/>
    },
    {
        title:"BETTER-FOR-YOU FORMULATIONS",
        subTitle:"SA dry tablet means we can use less-harmful ingredients and still protect",
        icon:<MdOutlineStarOutline/>
    },
    {
        title:"SINK-FRIENDLY",
        subTitle:"Our tablets leave less mess in your sink because no glycerine – what",
        icon:<FaSink/>
    },
    {
        title:"SUITCASE-SAFE",
        subTitle:"No more toothpaste explosions in your bag. Just throw a few Bits in",
        icon:<BsSuitcase/>
    },
    {
        title:"EARTH-FRIENDLY",
        subTitle:"Infinitely refillable with no plastic toothpaste tubes, our Bits are better.",
        icon:<FaEarthAmericas/>
    },
    {
        title:"STOPS THE SPREAD OF BACTERIA",
        subTitle:"Stop wasting money by using more toothpaste than you need.",
        icon:<FaBacterium/>
    },

]