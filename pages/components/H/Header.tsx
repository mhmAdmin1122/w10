import Image from 'next/image'
import React from 'react'
import logo from '@/public/img/logo1.png'
import { MdShoppingBag, MdShop2, MdHome } from 'react-icons/md'
import { PiCertificate } from 'react-icons/pi'
import { FaPhotoVideo, FaHandsHelping } from 'react-icons/fa'
import Link from 'next/link'
import { MdCastForEducation } from 'react-icons/md'

const Header = () => {
  return (
    <header className='w-full h-auto bg-purple-100 text-gray-800 flex justify-between items-center font-medium px-20 shadow-md shadow-gray-400 relative z-50'>

      <Link href={'/'} className='cursor-context-menu flex justify-center'>
        <Image src={logo} alt="logo" className="logo-img" style={{ width: "70px", height: '70px' }} title='World10 || Home' />
      </Link>

      <ul className="tabs flex text-purple-800 gap-4">

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>Home</h4>
          </li>
        </Link>

        <Link href={"/"}>
          <li className='relative font-bold'>
            <h4>Shop</h4>
          </li>
        </Link>

        <Link href={"/certificate"}>
          <li className='relative font-bold'>
            <h4>Certifiction</h4>
          </li>
        </Link>

        <Link href={"/courses"}>
          <li className='relative font-bold'>
            <h4>Courses</h4>
          </li>
        </Link>

        <Link href={"/enterTainment"}>
          <li className='relative font-bold'>
            <h4>Entertainment</h4>
          </li>
        </Link>

        <Link href={"/tutor-excercise"}>
          <li className='relative font-bold'>
            <h4>Tutorial and Excercises</h4>
          </li>
        </Link>

        <Link href={"/help"}>
          <li className='relative font-bold'>
            <h4>Help</h4>
          </li>
        </Link>

      </ul>

    </header>
  )
}

export default Header
