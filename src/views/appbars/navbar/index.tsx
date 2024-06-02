import React from 'react'
import NavbarWebUI from './navbar-web'
import NavbarPhoneUI from './navbar-phone'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
    <div className='hidden md:block'>
      <NavbarWebUI/>
    </div>
    <div className='block md:hidden'>
      <NavbarPhoneUI/>
    </div>
    </>
  )
}

export default Navbar