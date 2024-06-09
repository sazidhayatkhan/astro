'use client'
import React, { useEffect } from 'react';
import styles from './advertisemodal.module.css'
import useModalStore from '@/stores/useModalStore';
import Image from 'next/image'
import { AiOutlineCloseSquare } from 'react-icons/ai';
const Modal: React.FC = () => {
  const { isModalOpen,closeModal,openModal }:any = useModalStore();

  useEffect(() => {
    // Open the drawer 3 seconds after the component mounts
    const timer = setTimeout(() => {
        openModal();
    }, 3000);

    return () => {
      clearTimeout(timer); // Cleanup the timer if the component unmounts
    };
  }, [openModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className={styles.backdrop} onClick={closeModal}></div>
      )}
      <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`}>
        <div className={styles.modalContent}>
          <div className='grid grid-cols-3'>
            <div className='border'>
                <Image 
                    src="/images/offer.webp"
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-[400px] object-cover"
                />
            </div>
            <div className='col-span-2 relative'>
                <div className='flex justify-end mb-4'>
                    <button onClick={closeModal}><AiOutlineCloseSquare className='text-3xl'/></button>
                </div>
                <p className='text-4xl md:text-5xl text-center __playfair'>Get Discount</p>

                <div className='w-[70%] mx-auto absolute bottom-[20px] left-[0px] right-[0px]'>
                    <button className='w-full text-center bg-[#72f2c7] py-2 text-black border border-black mb-2 hover:bg-black hover:text-white transition duration-500'> CONTINUE</button>
                    <button className='w-full text-center bg-white py-2 text-black border border-black'>NO, THANK YOU</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
