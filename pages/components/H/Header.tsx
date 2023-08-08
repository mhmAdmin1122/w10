import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/img/logo1.png'
import { MdMenuBook, MdCastForEducation } from 'react-icons/md'
import { PiCertificateFill } from 'react-icons/pi'
import { FaHome, FaShoppingBag, FaPhotoVideo, FaHandsHelping } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'
import Link from 'next/link'

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive(current => !current);
  };
  return (
    <header className='w-full h-auto bg-purple-100 text-gray-800 flex justify-between items-center font-medium px-20 shadow-md shadow-gray-400 relative z-50'>

      <Link href={'/'} className='cursor-context-menu flex justify-center logo-box-header'>
        <Image src={logo} alt="logo" className="logo-img" style={{ width: "70px", height: '70px' }} title='World10 || Home' />
      </Link>

      <ul className="tabs web-tabs flex text-purple-800 gap-4">

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

      <div className='tab-mob-menu-ico-list'>

        <button onClick={handleClick}>
          <MdMenuBook />
        </button>

        {isActive && <ul>

          <Link href={'/'}>
            <li className='flex justify-between items-center'>
              <b>Home</b>
              <b><FaHome /></b>
            </li>
          </Link>

          <Link href={'/'}>
            <li className='flex justify-between items-center'>
              <b>Shop</b>
              <b><FaShoppingBag /></b>
            </li>
          </Link>

          <Link href={'/certificate'}>
            <li className='flex justify-between items-center'>
              <b>Certification</b>
              <b><PiCertificateFill /></b>
            </li>
          </Link>

          <Link href={'/courses'}>
            <li className='flex justify-between items-center'>
              <b>Course</b>
              <b><SiBookstack /></b>
            </li>
          </Link>

          <Link href={'/enterTainment'}>
            <li className='flex justify-between items-center'>
              <b>Entertainment</b>
              <b><FaPhotoVideo /></b>
            </li>
          </Link>

          <Link href={'/tutor-excercise'}>
            <li className='flex justify-between items-center'>
              <b>Tutorial & Excercise</b>
              <b><MdCastForEducation /></b>
            </li>
          </Link>

          <Link href={'/help'}>
            <li className='flex justify-between items-center'>
              <b>Help</b>
              <b><FaHandsHelping /></b>
            </li>
          </Link>

        </ul>
        }
      </div>

    </header>
  )
}

export default Header
