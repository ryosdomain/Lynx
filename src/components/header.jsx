import React from 'react'
import Logo from './logo'
import Nav from './nav'
import NavMobile from './NavMobile'
const header = () => {
  return (
    <div className='bg-black w-full py-2 border border-y-gray-700'>
        <div className="container m-auto flex items-center justify-between">
            <Logo />
            <Nav />
            <NavMobile className='lg:hidden'/>
        </div>
    </div>
  )
}

export default header