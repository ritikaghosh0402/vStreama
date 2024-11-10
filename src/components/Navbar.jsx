import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import vstreama from '../../public/vstreama.png';
import profile from '../../public/Profile.png';
import Avatar from 'react-avatar';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  return (
    <div className='flex justify-between px-6 py-2'>
        <div className='flex items-center space-x-4 '>
          <AiOutlineMenu className='text-xl cursor-pointer' />
          <img src={vstreama} alt='' className='w-24 cursor-pointer'></img> 
          </div>
        <div className='flex w-[40%] '>
          <div className='w-[100%] px-3 py-2 border border-gray-400 rounded-l-full' >
          <input type ='text'placeholder='Search' className='outline-none'onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}/>
          </div>
          <button className='px-4 py-2 border  border-gray-400 bg-gray-200 rounded-r-full'>
          <CiSearch size={'24px'}/>
          </button>
          <button>
          <IoMdMic size={'42px'} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 '/>
          </button>
          </div>
        <div className='flex space-x-5 items-center '>
          <Avatar src={profile} size='42' round={true}/>
        </div>
    </div>
  )
}

export default Navbar