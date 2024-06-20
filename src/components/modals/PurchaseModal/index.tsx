'use client'
import React,{useEffect} from 'react'
import styles from './purchasemodal.module.css'
import useModalStore from '@/stores/useModalStore';
type Props = {
    product?:any;
}

const PurchaseModal = ({product}: Props) => {
  const { isPurchaseModalOpen,closePurchaseModal,openPurchaseModal }:any = useModalStore();
    
  useEffect(() => {
    if (isPurchaseModalOpen) {
      const timer = setTimeout(() => {
        closePurchaseModal();
      }, 1200);

      // Clean up the timeout if the component unmounts or the modal is closed before the timeout
      return () => clearTimeout(timer);
    }
  }, [isPurchaseModalOpen, closePurchaseModal]);

  return (
    <div className={`${styles.modal} ${isPurchaseModalOpen ? styles.open : ''}`}>
        <div className='bg-[#72f2c7] w-full p-2 rounded-md text-black font-semibold text-sm'>
            Item added succesfully
        </div>
    </div>
  )
}

export default PurchaseModal