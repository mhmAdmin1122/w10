import React from 'react'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoPinterest } from 'react-icons/bi'
import { FaTiktok, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-purple-900 flex justify-around py-6">

            <div className="grid justify-center items-center">

                <p className="font-extrabold text-2xl cursor-context-menu text-red-600">
                    ABOUT US
                </p>

                <p className='text-gray-50 pt-3 w-60 text-justify'>
                    Welcome to our education site! At world10, we believe in empowering minds and shaping futures.
                </p>

                <b className="font-extrabold text-2xl cursor-context-menu text-red-600 mt-4">Follow Us Now!</b>

                <div className="social-icons flex gap-2 mt-4">
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-purple-800' title=''><FaTiktok /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-blue-600' title=''><BiLogoFacebook /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-red-500' title=''><FaYoutube /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-pink-600' title=''><BiLogoPinterest /></Link>
                    <Link href={"/"} className='bg-purple-600 text-white p-2 rounded-full text-xl border-2 border-purple-600 hover:border-2 hover:border-purple-600 hover:bg-purple-300 hover:text-orange-400' title=''><BiLogoInstagramAlt /></Link>
                </div>
            </div>

            <div className="recent">

                <p className='font-extrabold text-2xl cursor-context-menu text-red-600'>RECENT POSTS</p>

                <div className="pics pt-3">

                    <p className='flex gap-2 text-gray-50'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b> Access to 4,000+ of our top courses</b>
                    </p>

                    <p className='flex gap-2 text-gray-50'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b> Explore a variety of fresh topics</b>
                    </p>

                    <p className='flex gap-2 text-gray-50'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b> Find the right instructor for you</b>
                    </p>

                    <p className='flex gap-2 text-gray-50'>
                        <b className='font-bold text-xl text-red-600'>&rarr;</b>
                        <b> Find the right instructor for you</b>
                    </p>

                </div>

            </div>

            <div className="address grid">

                <p className='font-extrabold text-2xl cursor-context-menu text-red-600'>CONTACT US</p>

                <b className="text-gray-50 pt-3">
                    <b>Address:</b>
                    <address>Bahawalpur, PB, Pakistan, 63100</address>
                </b>

                <b className="text-gray-50 pt-3 grid">
                    <b>Phone:</b> 
                    <code>+9203257390045</code>
                </b>

                <b className="text-gray-50 pt-3 grid">
                    <b>Email:</b> 
                    <code>w10closetoworld@gmail.com</code>
                </b>

            </div>

        </footer>
    )
}

export default Footer
