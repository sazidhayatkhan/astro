import React from 'react'
import Loader from '@/components/loader';
import { fetchData } from '@/utils/useFetch';
import HeroSection from './heroSection'
import BestSellersUI from './bestSellers'
import WhyBitsAreBetterUI from './whyBitsAreBetter'
import Modal from '@/components/modals/AdvertiseModal'
import OfferButton from '@/components/buttons/OfferButton'

type Props = {}

const HomeUI = async(props: Props) => {
  const { data, error } = await fetchData('https://dummyjson.com/products');

  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      {!data ? 
        <Loader /> 
        : 
        <div>
            <HeroSection/>
            <BestSellersUI data={data?.products}/>
            <WhyBitsAreBetterUI/>
            <Modal/>
            <OfferButton/>
        </div>
      }
    </>
  )
}

export default HomeUI