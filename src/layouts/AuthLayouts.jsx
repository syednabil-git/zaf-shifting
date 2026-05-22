import React from 'react'
import Logo from '../components/Logo'
import { Outlet } from 'react-router'
import authImg from '../assets/authImage.png'

const AuthLayouts = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Logo></Logo>
        <div className='flex justify-center'>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1'>
                <img src={authImg}></img>
            </div>
        </div>
    </div>
  )
}

export default AuthLayouts