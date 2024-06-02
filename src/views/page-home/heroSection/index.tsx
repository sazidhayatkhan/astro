import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div>
      <div className={styles.hero_section}>
        <div className='mt-[-342px] md:mt-0'>
            <p className='__playfair text-[45px] md:text-[50px] w-[90%] md:w-[53%] leading-[50px] text-center mx-auto'>A better way to brush your teeth.</p>
            <div className='w-[90%] md:w-[37%] mx-auto flex flex-col justify-center items-center'>
                <p className='py-5 text-base text-center leading-[19px]'>Toothpaste Bits without the plastic tubes or harsh chemicals that actually work.</p>
                <button className='bg-black text-white py-[10px] w-[120px] md:w-full text-xs'>SHOP NOW</button>
            </div>
        </div>
      </div>
      <div className='_container hidden md:grid grid-cols-9 gap-3 py-8 border-t-[1px] border-b-[1px] border-black items-center'>
        <p className='text-center text-sm hidden md:block'>AS SEEN IN</p>
        {brands?.length > 0 ? 
            brands?.map((item:any,i:any)=>(
                <div key={i}>
                    <Image 
                        src={item?.img}
                        alt="brand-name"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[22px] object-contain"
                    />
                </div>
            ))
            :
            <></>
        }
      </div>
      <div className='block md:hidden border-t-[1px] border-black border-b-[1px] py-3'>
        <Marquee>
        {brands?.length > 0 ? 
                brands?.map((item:any,i:any)=>(
                    <div key={i} className='px-3'>
                        <Image 
                            src={item?.img}
                            alt="brand-name"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[22px] object-contain"
                        />
                    </div>
                ))
                :
                <></>
            }
        </Marquee>
      </div>
    </div>
  )
}

export default HeroSection
const brands = [
    {
        id:0,
        img:"/images/forbes.png"
    },
    {
        id:1,
        img:"/images/orphan.png"
    },
    {
        id:2,
        img:"/images/cosmo.png"
    },
    {
        id:3,
        img:"/images/woman.png"
    },
    {
        id:4,
        img:"/images/vogue.png"
    },
    {
        id:5,
        img:"/images/goop.png"
    },
    {
        id:6,
        img:"/images/elite.png"
    },
    {
        id:7,
        img:"/images/people.png"
    },
]