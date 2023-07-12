import React from 'react'

const About = () => {
  return (
    <div className='about-us w-full h-auto flex items-start'>
      <div className='text_orr h-auto bg-gray-500 text-white px-4 py-2 my-1 ml-2'>
        <b>A B O U T   U S</b>
      </div>
      <div className="abotText pr-8 pl-3 py-2">
        <h1 className='font-extrabold text-2xl mb-2'>About Us!</h1>
        <p className='my-2'>Welcome to our education site! At {"world10"}, we believe in empowering minds and shaping futures.</p>
        <b className='text-justify mt-1 mb-1'>Who are we?</b>
        <p className='text-justify mt-2 mb-2'>We are a passionate team of educators, innovators, and dreamers committed to revolutionizing the way knowledge is imparted and acquired. Our mission is to inspire, educate, and ignite the curiosity within every learner, regardless of age or background. With a diverse range of courses, expert instructors, and cutting-edge technology, we strive to create a dynamic and inclusive learning environment where students can unlock their full potential and thrive in {"today's"} ever-changing world. Join us on this transformative journey of growth and discovery, as we pave the way for a brighter, more enlightened tomorrow.</p>
      </div>
    </div>
  )
}

export default About;