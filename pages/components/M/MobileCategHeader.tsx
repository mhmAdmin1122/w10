import React from 'react'
import { MdOutlineCastForEducation, MdShoppingBag, MdShop2 } from 'react-icons/md'
import { PiCertificate } from 'react-icons/pi'
import { FaPhotoVideo, FaHandsHelping } from 'react-icons/fa'
import Link from 'next/link'

const MobileCategHeader = () => {
    return (
        <>
            <div className='category-mobile-Tabs bg-gray-500 w-full h-8 shadow-md shadow-gray-300 text-gray-800 flex items-center font-medium px-5 header'>
                <ul className="Category-mobile-List w-full flex text-white items-center justify-between">

                    <li className="mobile_tabs_Category cursor-pointer px-2 grid justify-items-center items-center gap-2">
                        <b className="icon-category-tabs" title='Education'><MdOutlineCastForEducation className="text-4xl w-10 h-10 hover:text-gray-800 hover:bg-white rounded-full p-2" /></b>
                        {/* <b className="category-Tabs-Title">Education</b> */}
                    </li>

                    <li className="mobile_tabs_Category cursor-pointer px-2 grid justify-items-center items-center gap-2">
                        <b className="icon-category-tabs" title='Shop'><MdShoppingBag className="text-4xl w-10 h-10 hover:text-gray-800 hover:bg-white rounded-full p-2" /></b>
                        {/* <b className="category-Tabs-Title">Shop</b> */}
                    </li>

                    <li className="mobile_tabs_Category cursor-pointer px-2 grid justify-items-center items-center gap-2">
                        <b className="icon-category-tabs" title='Certifiction'><PiCertificate className="text-4xl w-10 h-10 hover:text-gray-800 hover:bg-white rounded-full p-2" /></b>
                        {/* <b className="category-Tabs-Title">Certifiction</b> */}
                    </li>

                    <li className="mobile_tabs_Category cursor-pointer px-2 grid justify-items-center items-center gap-2">
                        <b className="icon-category-tabs" title='Entertainment'><FaPhotoVideo className="text-4xl w-10 h-10 hover:text-gray-800 hover:bg-white rounded-full p-2" /></b>
                        {/* <b className="category-Tabs-Title">Entertainment</b> */}
                    </li>

                    <li className="mobile_tabs_Category cursor-pointer px-2 grid justify-items-center items-center gap-2">
                        <b className="icon-category-tabs" title='Tutorial and Excercises'><MdShop2 className="text-4xl w-10 h-10 hover:text-gray-800 hover:bg-white rounded-full p-2" /></b>
                        {/* <b className="category-Tabs-Title">Tutorial and Excercises</b> */}
                    </li>

                    <Link href={"/help"}>
                        <li className="mobile_tabs_Category cursor-pointer relative px-2 grid justify-items-center items-center gap-2">
                            <b className="icon-category-tabs" title='Help'><FaHandsHelping className="text-4xl w-10 h-10 hover:text-gray-800 hover:bg-white rounded-full p-2" /></b>
                            {/* <b className="category-Tabs-Title">Help</b> */}
                        </li>
                    </Link>

                </ul>
            </div>
        </>
    )
}

export default MobileCategHeader
