import React from 'react'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoPinterest, BiSolidEnvelope } from 'react-icons/bi'
import { FaTiktok, FaYoutube, FaBlenderPhone } from 'react-icons/fa'
import { MdEscalatorWarning, MdFollowTheSigns, MdContacts } from 'react-icons/md';
import { GiUfo, GiDirectionSign } from 'react-icons/gi';

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-purple-200 flex flex-wrap gap-4 justify-around py-6">

            <div className="grid justify-center items-center">

                <p className="font-extrabold text-2xl cursor-context-menu text-orange-500 flex items-center gap-3">
                    <b><MdEscalatorWarning /></b>
                    <b>ABOUT US</b>
                </p>

                <p className='text-black pt-3 w-60 text-justify'>
                    Welcome to our education site! At world10, we believe in empowering minds and shaping futures.
                </p>

                <b className="font-extrabold text-2xl cursor-context-menu text-orange-500 mt-4 flex items-center gap-3">
                    <b><MdFollowTheSigns /></b>
                    <b>Follow Us Now!</b>
                </b>

                <div className="social-icons flex gap-2 mt-4">
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-purple-800' title=''><FaTiktok /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-blue-600' title=''><BiLogoFacebook /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-red-500' title=''><FaYoutube /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-pink-600' title=''><BiLogoPinterest /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-orange-400' title=''><BiLogoInstagramAlt /></Link>
                </div>
            </div>

            <div className="recent">

                <p className='font-extrabold text-2xl cursor-context-menu text-orange-500 flex items-center gap-3'>
                    <b><GiUfo /></b>
                    <b>Famous Courses</b>
                </p>

                <div className="pics pt-3">

                    <div className='flex gap-2 text-black cursor-pointer items-center'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <p>Angular Course With Certificate</p>
                    </div>

                    <div className='flex gap-2 text-black cursor-pointer items-center'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b>React Course With Certificate</b>
                    </div>

                    <div className='flex gap-2 text-black cursor-pointer items-center'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <p>Python Course With Certificate</p>
                    </div>

                    <div className='flex gap-2 text-black cursor-pointer items-center'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b>MongoDB Course With Certificate</b>
                    </div>

                    <div className='flex gap-2 text-black cursor-pointer items-center'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <p>Node.Js Course With Certificate</p>
                    </div>

                    <div className='flex gap-2 text-black cursor-pointer items-center'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b>Express.Js Course With Certificate</b>
                    </div>

                </div>

            </div>

            <div className="address grid">

                <b className='font-extrabold text-2xl cursor-context-menu text-orange-500 flex items-center gap-3'>
                    <b><MdContacts /></b>
                    <b>CONTACT US</b>
                </b>

                <div className="text-black pt-3 font-bold">
                    <p className='flex items-center gap-2'>
                        <b><GiDirectionSign /></b>
                        <b>Address:</b>
                    </p>
                    <address>Bahawalpur, PB, Pakistan, 63100</address>
                </div>

                <div className="text-black pt-3 grid font-bold">
                    <p className='flex items-center gap-2'>
                        <b><FaBlenderPhone /></b>
                        <b>Phone:</b>
                    </p>
                    <code>+923257390045</code>
                </div>

                <div className="text-black pt-3 grid font-bold">
                    <p className='flex items-center gap-2'>
                        <b><BiSolidEnvelope /></b>
                        <b>Email:</b>
                    </p>
                    <code>w10closetoworld@gmail.com</code>
                </div>

            </div>

        </footer>
    )
}

export default Footer
