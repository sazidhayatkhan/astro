'use client'
import React, { useState, useEffect } from 'react';
import styles from './sidecart.module.css'; // Create a separate CSS file for styling
import useDrawerStore from '@/stores/useDrawerStore';
import useCartStore from '@/stores/useCartStore';
import Image from 'next/image'
import { FaRegTrashAlt } from 'react-icons/fa';
const SidecartDrawer = () => {
  const { isOpen, closeDrawer }:any = useDrawerStore();
  const cart = useCartStore((state:any) => state.cart);
  const removeFromCart = useCartStore((state:any) => state.removeFromCart);
  const clearCart = useCartStore((state:any) => state.clearCart);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  
  return (
    <div>
      {isOpen && <div className={styles.backdrop} onClick={closeDrawer}></div>}
      <div className={`${styles.drawer} ${isOpen ? `${styles.open}` : ''}`}>
        <button onClick={closeDrawer}>Close</button>
        <div className={`${styles.drawerContent} px-3 h-[calc(100vh-100px)] overflow-hidden overflow-y-auto`}>
          {/* Drawer content goes here */}
          { 
           cart?.length > 0 &&
            cart?.map((item:any,i:any)=>(
              <div key={i} className='flex items-start gap-1 my-2'>
                <div className='flex items-start border'>
                  <div className='w-[20%]'>
                    <Image
                      src={item?.thumbnail || "/images/products/prod4.webp"}
                      alt="img"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-[70px] object-contain"
                    />
                  </div>
                  <div className='w-[80%] border-l-[1px] p-2'>
                    <p className='text-sm font-medium text-gray-500 mb-1 w-[210px]'>{item?.title}</p>
                    <p className='text-black font-semibold mb-1'>{item?.price}</p>
                    <div className='flex items-center'>
                      <button className='bg-slate-200 px-2 py-[1px]'>-</button>
                      <p className='px-4 border'>1</p>
                      <button className='bg-slate-400 px-2 py-[1px]'>+</button>
                    </div>
                  </div>
                </div>
                <div>
                  <button onClick={() => removeFromCart(item?.id)}>
                    <FaRegTrashAlt/>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SidecartDrawer;
