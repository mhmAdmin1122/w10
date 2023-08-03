import React from 'react'
import { ImHtmlFive } from 'react-icons/im'
import { FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { BiLogoMongodb, BiLogoJavascript } from 'react-icons/bi'
import { MdOutlineReadMore } from 'react-icons/md'
import Link from 'next/link'

const LanguageCourseSec = () => {
    return (
        <section>
            <div className="lang-course-sec flex flex-wrap gap-2 my-2 justify-center">
                <Link href="/" className='flex flex-wrap px-4 py-2 rounded-sm text-gray-50 items-center gap-1 bg-orange-500 shadow-sm shadow-orange-200'>
                    <b className='text-2xl'><ImHtmlFive /></b>
                    <b>HTML-5 Courses</b>
                </Link>

                <Link href="/" className='flex flex-wrap px-4 py-2 rounded-sm text-gray-50 items-center gap-1 bg-blue-500 shadow-sm shadow-blue-200'>
                    <b className='text-2xl'><FaCss3Alt /></b>
                    <b>CSS-3 Courses</b>
                </Link>

                <Link href="/" className='flex flex-wrap px-4 py-2 rounded-sm text-gray-50 items-center gap-1 bg-yellow-500 shadow-sm shadow-yellow-200'>
                    <b className='text-2xl'><BiLogoJavascript /></b>
                    <b>JavaScript Courses</b>
                </Link>

                <Link href="/" className='flex flex-wrap px-4 py-2 rounded-sm text-gray-50 items-center gap-1 bg-green-600 shadow-sm shadow-green-200'>
                    <b className='text-2xl'><BiLogoMongodb /></b>
                    <b>MongoDB Courses</b>
                </Link>

                <Link href="/" className='flex flex-wrap px-4 py-2 rounded-sm text-gray-50 items-center gap-1 bg-green-400 shadow-sm shadow-green-200'>
                    <b className='text-2xl'><FaNodeJs /></b>
                    <b>Node.Js Courses</b>
                </Link>

                <Link href="/" className='flex flex-wrap px-4 py-2 rounded-sm text-gray-50 items-center gap-1 bg-red-600 shadow-sm shadow-red-200'>
                    <b className='text-2xl'><MdOutlineReadMore /></b>
                    <b>Other Courses</b>
                </Link>
            </div>
        </section>
    )
}

export default LanguageCourseSec
