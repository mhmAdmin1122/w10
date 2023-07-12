import Image from 'next/image'
import React from 'react'
import { MdOutlineSearch, MdMenu } from 'react-icons/md'
import logo from '@/../public/img/logo1.png'
import Link from 'next/link'
import MobileSearchIcon from '../M/MobileSearchIcon'

const Header = () => {
  return (
    <nav className='w-full h-auto shadow-md shadow-gray-300 bg-gray-200 text-gray-800 flex justify-between items-center font-medium px-5 header'>
      <div className="listOpenTabs_Func">
        <button><b><MdMenu className='hover:bg-gray-400 p-1 text-4xl rounded-full hover:text-gray-100'/></b></button>
        <ul className="list">
          <li className="tabs"></li>
          <li className="tabs"></li>
          <li className="tabs"></li>
          <li className="tabs"></li>
        </ul>
      </div>
      <div className="pageTitleBox cursor-context-menu flex justify-center" title='Home || W10'>
        <Link href={"/"}><Image src={logo} alt='logo' style={{width: "100px", height: '100px'}}/></Link>
      </div>
      <div className="search-box">
        <form className='flex items-center' title='Search'>
          <input type="search" placeholder='search' className='outline-none px-3 py-1 rounded-l-lg' />
          <button type="submit"><b><MdOutlineSearch className='bg-white h-8 rounded-r-lg'/></b></button>
        </form>
      </div>
      <MobileSearchIcon />
    </nav>
  )
}

export default Header