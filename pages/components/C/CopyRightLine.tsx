import React from 'react'
import { MdOutlineCopyright } from 'react-icons/md'
import logo from '../../../public/img/logo1.png'
import Image from 'next/image'
import Link from 'next/link'

const CopyRightLine = () => {
    return (
        <div className='cpy-line w-full h-auto gap-2 flex flex-wrap bg-purple-400 text-xl py-3 font-extrabold items-center justify-center content-center text-center'>
            <Link href={'/'} className="img-logo-cpy-line w-20 h-20 rounded-full border-2 bg-gray-50 flex justify-center items-center border-r-gray-200 border-l-0 border-t-0 border-b-0">
                <Image src={logo} alt="logo-Pic" className='w-16 h-16'/>
            </Link>
            <b>Copyright</b>
            <b><MdOutlineCopyright /></b>
            <b>2023 world10.tech</b>
        </div>
    )
}

export default CopyRightLine
