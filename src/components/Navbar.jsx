import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import youtube from '../../public/youtube.png';
import profile from '../../public/Profile.png';
import Avatar from 'react-avatar';

function Navbar() {
  return (
    <div className='flex justify-between px-6 py-2'>
        <div className='flex items-center space-x-4 border border-black'><AiOutlineMenu className='text-xl' /><img src={youtube} alt='' className='w-24 cursor-pointer'></img> </div>
        <div className='flex w-[40%] border border-black'><input type ='text'placeholder='Search' className='outline-none'/><CiSearch /><IoMdMic /></div>
        <div className='border border-black'>
          <Avatar src={profile} size='32' round={true}/>
        </div>
    </div>
  )
}

export default Navbar