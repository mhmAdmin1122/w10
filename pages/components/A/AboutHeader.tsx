import React from 'react'

const AboutHeader = () => {
  return (
    <nav className='about_tabs'>
      <ul className='flex items-center justify-between bg-gray-500 text-gray-100 font-bold text-lg mt-4'>
        <li className="aboutMore_tabs transition-all ease-in-out duration-1000 border-2 border-gray-500 hover:bg-white hover:text-gray-500 cursor-pointer px-6 py-3">About Us</li>
        <li className="aboutMore_tabs transition-all ease-in-out duration-1000 border-2 border-gray-500 hover:bg-white hover:text-gray-500 cursor-pointer px-6 py-3">Contact Us</li>
        <li className="aboutMore_tabs transition-all ease-in-out duration-1000 border-2 border-gray-500 hover:bg-white hover:text-gray-500 cursor-pointer px-6 py-3">Our Team</li>
        <li className="aboutMore_tabs transition-all ease-in-out duration-1000 border-2 border-gray-500 hover:bg-white hover:text-gray-500 cursor-pointer px-6 py-3">Terms & Services</li>
        <li className="aboutMore_tabs transition-all ease-in-out duration-1000 border-2 border-gray-500 hover:bg-white hover:text-gray-500 cursor-pointer px-6 py-3">Privacy Policy</li>
        <li className="aboutMore_tabs transition-all ease-in-out duration-1000 border-2 border-gray-500 hover:bg-white hover:text-gray-500 cursor-pointer px-6 py-3">Disclaimer</li>
      </ul>
    </nav>
  )
}

export default AboutHeader;
