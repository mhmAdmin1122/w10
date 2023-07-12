import React from 'react'
import { MdOutlineCastForEducation, MdShoppingBag, MdShop2 } from 'react-icons/md'
import { PiCertificate } from 'react-icons/pi'
import { FaPhotoVideo, FaHandsHelping } from 'react-icons/fa'
import Link from 'next/link'

const CategoryTabs = () => {
  return (
    <div className='categoryTabs bg-gray-500 w-full h-8 shadow-md shadow-gray-300 text-gray-800 flex justify-center items-center font-medium px-5 header'>
      <ul className="CategoryList flex text-white">

        <li className="tabs_Category cursor-pointer hover:bg-white hover:text-gray-800 hover:border-b-red-400 border-2 border-white px-2 border-l-0 border-t-0 border-b-0 flex items-center gap-2">
          <b><MdOutlineCastForEducation /></b>
          <h4>Education</h4>
        </li>

        <li className="tabs_Category cursor-pointer hover:bg-white hover:text-gray-800 hover:border-b-red-400 border-2 border-white px-2 border-l-0 border-t-0 border-b-0 flex items-center gap-2">
          <b><MdShoppingBag /></b>
          <b>Shop</b>
        </li>

        <li className="tabs_Category cursor-pointer hover:bg-white hover:text-gray-800 hover:border-b-red-400 border-2 border-white px-2 border-l-0 border-t-0 border-b-0 flex items-center gap-2">
          <b><PiCertificate /></b>
          <b>Certifiction</b>
        </li>

        <li className="tabs_Category cursor-pointer hover:bg-white hover:text-gray-800 hover:border-b-red-400 border-2 border-white px-2 border-l-0 border-t-0 border-b-0 flex items-center gap-2">
          <b><FaPhotoVideo /></b>
          <b>Entertainment</b>
        </li>

        <li className="tabs_Category cursor-pointer hover:bg-white hover:text-gray-800 hover:border-b-red-400 border-2 border-white px-2 border-l-0 border-t-0 border-b-0 flex items-center gap-2">
          <b><MdShop2 /></b>
          <b>Tutorial and Excercises</b>
        </li>

        <Link href={"/help"}>
          <li className="tabs_Category cursor-pointer relative hover:bg-white hover:text-gray-800 hover:border-b-red-400 px-2 flex items-center gap-2">
            <b><FaHandsHelping /></b>
            <b>Help</b>
          </li>
        </Link>

      </ul>
    </div>
  )
}

export default CategoryTabs
