import React from 'react'
import Logo from '../assets/images/LogoWhite.png'
import { Link } from 'react-router'

const logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img className='w-40 ' src={Logo} alt="" />
      </Link>
    </div>
  )
}

export default logo