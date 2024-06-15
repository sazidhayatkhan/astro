"use client"
import SidecartDrawer from '@/components/drawers/SidecartDrawer'
import useDrawerStore from '@/stores/useDrawerStore'
import React,{useState,useEffect} from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {}

const NavbarWebUI = (props: Props) => {
  const [bgColor, setBgColor] = useState('bg-transparent');   //changing navbar background color
  const { openDrawer }:any = useDrawerStore();
  const pathname = usePathname()
  useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { 
                setBgColor('bg-[#FAFAFA]');
            } else {
                setBgColor('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
  }, []);
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-10 _container flex justify-between items-center border-b-[1px] border-black ${bgColor} transition-colors duration-300`}>
          {/* <button className='__playfair text-2xl font-semibold'>Astro</button> */}
      <Link href="/">
        <button className="button-hover">
            <span className="text text-astro">Astro</span>
            <span className="text text-hovered text-xs font-semibold">BECAUSE IT'S THE EARTH</span>
        </button>
      </Link>

          <div className='flex justify-center items-center'>
            <Link href="/shop">
              <button className={`${pathname === '/shop' ? 'border-b-[3px] border-black':'border-b-[3px] border-transparent'} text-xs hover:border-black p-6 transition duration-500`}>SHOP</button>
            </Link>
            <button className='text-xs border-b-[3px] border-transparent hover:border-black p-6 transition duration-500'>ABOUT</button>
            <button className='text-xs border-b-[3px] border-transparent hover:border-black p-6 transition duration-500'>OUR IMPACT</button>
          </div>
          <div className='flex justify-end items-center gap-3'>
            <button className='text-xl'><FaRegUser /></button>
            <button onClick={openDrawer} className='text-2xl'><HiOutlineShoppingBag /></button>
          </div>
        </nav>
        <SidecartDrawer/>
    </>
  )
}

export default NavbarWebUI