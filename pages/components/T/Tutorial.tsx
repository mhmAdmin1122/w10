import Image from 'next/image'
import React from 'react'
import ProgrammingPic from '@/../public/img/programe.jpg'
import dataentryPic from '../../../public/img/dataentry.jpg'
import graphicPic from '../../../public/img/graphic.jpg'

const Tutorial = () => {
  return (
    <>
      <div className="Tutor-Bx px-12">
        <b className='text-center w-full flex items-center justify-center my-4 text-2xl'>Tutorials</b>
        <div className="cards-box gap-4 my-3 flex items-start justify-center flex-wrap">
          <div className="tutor-card w-80 rounded-lg shadow-lg shadow-gray-400 overflow-hidden">
            <div className="cardPic-bx">
              <Image src={ProgrammingPic} alt='card-pic' />
            </div>
            <div className="card-body px-2">
              <b className='text-xl my-3 cursor-pointer'>Programing Tutorial</b>
              <p className='text-justify text-gray-600'>
                Programming tutorials serve as invaluable resources for individuals embarking on their coding journey or aiming to enhance their programming skills. By providing structured learning paths, hands-on experience, problem-solving opportunities, and a variety of formats, these tutorials empower learners to acquire and strengthen their programming knowledge.
              </p>
              <div className="more-btn w-full items-center flex justify-center">
                <button className='px-4 py-2 rounded-lg bg-gray-800 text-gray-50 font-medium flex items-center justify-center my-3'>About More &rarr;</button>
              </div>
            </div>
          </div>

          <div className="tutor-card w-80 rounded-lg shadow-lg shadow-gray-400 overflow-hidden">
            <div className="cardPic-bx">
              <Image src={dataentryPic} alt='card-pic' />
            </div>
            <div className="card-body px-2">
              <b className='text-xl my-3 cursor-pointer'>Data-Entry Tutorial</b>
              <p className='text-justify text-gray-600'>
                Efficient and accurate data entry is a valuable skill across multiple industries. By following best practices, applying appropriate techniques, and continuously honing your skills, you can enhance your productivity, minimize errors, and contribute to maintaining high-quality data. With practice and attention to detail...
              </p>
              <div className="more-btn w-full items-center flex justify-center">
                <button className='px-4 py-2 rounded-lg bg-gray-800 text-gray-50 font-medium flex items-center justify-center my-3'>About More &rarr;</button>
              </div>
            </div>
          </div>

          <div className="tutor-card gr-crd w-80 rounded-lg shadow-lg shadow-gray-400 overflow-hidden">
            <div className="cardPic-bx">
              <Image src={graphicPic} alt='card-pic' />
            </div>
            <div className="card-body px-2">
              <b className='text-xl my-3 cursor-pointer'>Graphics designing Tutorial</b>
              <p className='text-justify text-gray-600'>
                Mastering graphics designing requires a combination of technical skills, creativity, and an understanding of design principles. This tutorial provided a brief overview of the key aspects involved in the graphics designing process, from understanding the basics to creating a design brief, executing designs, and incorporating feedback. Continuously practice and.....
              </p>
              <div className="more-btn w-full items-center flex justify-center">
                <button className='px-4 py-2 rounded-lg bg-gray-800 text-gray-50 font-medium flex items-center justify-center my-3'>About More &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-btn w-full items-center flex justify-center">
        <button className='px-4 py-2 rounded-lg bg-gray-800 text-gray-50 font-medium flex items-center justify-center my-3'>For More Tutorials &rarr;</button>
      </div>
      <div className="space h-24"></div>
    </>
  )
}

export default Tutorial
