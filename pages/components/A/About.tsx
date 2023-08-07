import React from 'react'
import Image from 'next/image'
import clasPic from '@/public/img/classes.png'
import topCourses from '@/public/img/top.png'
import ebooks from '@/public/img/ebook.png'

const About = () => {
  return (
    <section>

      <div className="aboutus grid justify-center bg-blue-50 w-full px-10 py-12 h-auto">

        <p className="text-orange-500 cursor-context-menu text-4xl text-center font-bold">About Us</p>

        <p className="text-3xl cursor-context-menu text-center font-bold">
          The Result of All True Learning
        </p>

        <p className="text-center cursor-context-menu text-lg font-bold mt-3">
          <strong>A modern and unique style</strong>
        </p>

        <div className="portions flex gap-8 mt-4 flex-wrap justify-center">
          <div className="new-class h-auto w-80 rounded-3xl items-center px-5 pb-5 pt-12 shadow-lg shadow-gray-400 relative content-center bg-gray-200 grid justify-center justify-items-center">
            <Image src={clasPic} alt="new-Class" className='w-20 h-20 border-2 border-gray-100 p-4 rounded-full' />
            <p className="text-center cursor-context-menu text-lg font-bold mt-3">NEW CLASSES</p>
            <p className="text-xl p-2 font-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorem.</p>
          </div>
          <div className="new-class h-auto w-80 rounded-3xl items-center px-5 pb-5 pt-12 shadow-lg shadow-gray-400 relative content-center bg-gray-200 grid justify-center justify-items-center">
            <Image src={topCourses} alt="top-courses" className='w-20 h-20 border-2 border-gray-100 p-4 rounded-full' />
            <p className="text-center cursor-context-menu text-lg font-bold mt-3">TOP COURSES</p>
            <p className="text-xl p-2 font-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorem.</p>
          </div>
          <div className="new-class h-auto w-80 rounded-3xl items-center px-5 pb-5 pt-12 shadow-lg shadow-gray-400 relative content-center bg-gray-200 grid justify-center justify-items-center">
            <Image src={ebooks} alt="E-BOOKS" className='w-20 h-20 border-2 border-gray-100 p-4 rounded-full' />
            <p className="text-center cursor-context-menu text-lg font-bold mt-3">FULL E-BOOKS</p>
            <p className="text-xl p-2 font-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorem.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About;