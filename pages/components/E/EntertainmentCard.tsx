import Image from 'next/image'
import React, { useState } from 'react'
import CustomVideoPlayer from '../C/CustomeVideoPlayer';

const EntertainmentCard = ({ data }: any) => {
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
        <Image src={data?.pic} alt='card-Image' width={319} height={180} />
        {isHovering &&
          <CustomVideoPlayer src={videoSrc} />
        }

      </div>
      <div className="cardDetails w-full px-2 py-1">
        <b>{data?._id}</b><br />
        <b className='mb-2 cursor-pointer'>{data?.title}</b>
        <p className='text-gray-400 text-justify'>
          {data?.description}
        </p>
      </div>
    </div>
  )
}

export default EntertainmentCard;
