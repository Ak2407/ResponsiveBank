import React from 'react'
import { HiSearch, HiOutlineUserCircle } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { TfiBell } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className='navbar bg-white h-[86px] sm:flex flex-row items-center justify-evenly gap-[20px] px-6 border-b-2 border-gray-200 hidden'>
        <div className='logo-section cursor-pointer'>
            <h1 className='text-xl font-semibold'>Logo</h1>
        </div>
        <div className='nav-link-section flex flex-row flex-1  justify-evenly items-center h-full '>
            <div className='flex items-center px-10 h-full border-b-4 border-success cursor-pointer'>
            <h1 className='text-xl font-semibold '>Home</h1>
            </div>
            <div className='flex items-center px-10 h-full cursor-pointer'>
            <h1 className='text-xl font-semibold '>Services</h1>
            </div>
            <div className='flex items-center px-10 h-full cursor-pointer'>
            <h1 className='text-xl font-semibold '>Blog</h1>
            </div>
            <div className='flex items-center px-10 h-full cursor-pointer'>
            <h1 className='text-xl font-semibold '>Offers</h1>
            </div>
            <div className='flex items-center px-10 h-full cursor-pointer'>
            <h1 className='base:text-xl font-semibold sm:text-[19px]'>About Us</h1>
            </div>
            
            
        </div> 
        <div className='nav-icons-section flex justify-evenly gap-10'>
        <CiSearch className='text-[35px] cursor-pointer'/>
        <TfiBell className='text-[35px] cursor-pointer'/>
        <HiOutlineUserCircle className='text-[35px] cursor-pointer'/>

        </div>

    </div>
  )
}

export default Navbar