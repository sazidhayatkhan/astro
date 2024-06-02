import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { GrMenu } from 'react-icons/gr'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

type Props = {}

const NavbarPhoneUI = (props: Props) => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-transparent flex justify-between items-center p-4'>
        <div className='flex justify-start items-center gap-3'>
            {/* <button className='text-2xl'><GrMenu /></button> */}
            <button className='__playfair text-2xl font-semibold'>Astro</button>
        </div>
        <div className='flex justify-end items-center gap-3'>
          <button className='text-2xl'><FaRegUser /></button>
          <button className='text-3xl'><HiOutlineShoppingBag /></button>
        </div>
    </nav>
  )
}

export default NavbarPhoneUI