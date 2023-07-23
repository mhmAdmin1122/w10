import Image from 'next/image'
import React, { useState } from 'react'
import cardPic from '@/../public/img/logo.png'
import CustomVideoPlayer from '../C/CustomeVideoPlayer';

const EntertainmentCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const videoSrc = '/video/don.mp4';

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className='Card-Body w-80 h-auto border-2 border-gray-200 rounded-lg overflow-hidden shadow-md shadow-gray-300'>
      <div className="CardImage w-full relative" onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        <Image src={cardPic} alt='card-Image' style={{ height: 180 }} />
        {isHovering &&
          <CustomVideoPlayer src={videoSrc} />
        }
      </div>
      <div className="cardDetails w-full px-2 py-1">
        <b className='mb-2'>HTML Introduction || What Is HTML</b>
        <p className='text-gray-400 text-justify'>
          HTML is the standard markup language for creating Web pages.
          HTML describes the structure of a Web page.
          HTML consists of a series of elements.
        </p>
      </div>
    </div>
  )
}

export default EntertainmentCard;
