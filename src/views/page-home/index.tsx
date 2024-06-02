import React from 'react'
import HeroSection from './heroSection'
import BestSellersUI from './bestSellers'
import WhyBitsAreBetterUI from './whyBitsAreBetter'

type Props = {}

const HomeUI = (props: Props) => {
  return (
    <div>
        <HeroSection/>
        <BestSellersUI/>
        <WhyBitsAreBetterUI/>
    </div>
  )
}

export default HomeUI