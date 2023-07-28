import React, { useState } from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import Image from 'next/image'
import Link from 'next/link'
import logoPic from '@/public/img/logo.png'

const Layout = ({ children }: any) => {
    const [isActive, setActive] = useState<any>(true);
    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <>
            <div className="bg-blue-700 px-16 py-8 grid justify-center items-center justify-items-center h-auto">
                <div className="openBox grid justify-center items-center justify-items-center bg-white my-4 rounded-md px-10 py-4">
                    <div className="logoBox flex items-center justify-center">
                        <Link href={'/Admin/admin'}>
                            <Image src={logoPic} alt='logo' className='w-32 cursor-pointer' />
                        </Link>
                        <b>Admin Panel</b>
                    </div>
                    <div className="openBtn">
                        <button onClick={handleToggle} className='bg-blue-700 px-2 py-1 rounded-md text-gray-50 font-bold'>Open Panel</button>
                    </div>
                </div>
                {isActive &&
                    <div className="bg-gray-100 px-12 py-4 rounded-md">
                        <AdminHeader />
                        {children}
                    </div>
                }
            </div>
        </>
    )
}

export default Layout
