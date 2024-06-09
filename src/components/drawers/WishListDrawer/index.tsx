'use client'
import React, { useState, useEffect } from 'react';
import styles from './wishlist.module.css'
import useDrawerStore from '@/stores/useDrawerStore';

const WishListDrawer = () => {
  const { isWishOpen, closeWishDrawer }:any = useDrawerStore();
    console.log("I AM OPEN");
    
  useEffect(() => {
    if (isWishOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isWishOpen]);
  
  return (
    <div>
      {isWishOpen && <div className={styles.backdrop} onClick={closeWishDrawer}></div>}
      <div className={`${styles.drawer} ${isWishOpen ? `${styles.open}` : ''}`}>
        <button onClick={closeWishDrawer}>Close</button>
        <div className={styles.drawerContent}>
          {/* Drawer content goes here */}
          <p>This is the Wish content.</p>
        </div>
      </div>
    </div>
  );
};

export default WishListDrawer;
