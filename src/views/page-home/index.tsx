import React from 'react'
import HeroSection from './heroSection'
import BestSellersUI from './bestSellers'
import WhyBitsAreBetterUI from './whyBitsAreBetter'
import SidecartDrawer from '@/components/drawers/SidecartDrawer'

type Props = {}

const HomeUI = (props: Props) => {
  return (
    <div>
        <HeroSection/>
        <BestSellersUI/>
        <WhyBitsAreBetterUI/>
        <SidecartDrawer/>
    </div>
  )
}

export default HomeUI