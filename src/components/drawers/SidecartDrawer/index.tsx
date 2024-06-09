'use client'
import React, { useState, useEffect } from 'react';
import styles from './sidecart.module.css'; // Create a separate CSS file for styling
import useDrawerStore from '@/stores/useDrawerStore';

const SidecartDrawer = () => {
  const { isOpen, closeDrawer }:any = useDrawerStore();

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
        <div className={styles.drawerContent}>
          {/* Drawer content goes here */}
          <p>This is the drawer content.</p>
        </div>
      </div>
    </div>
  );
};

export default SidecartDrawer;
