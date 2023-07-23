import { useRef } from 'react';
import { MdVolumeUp } from 'react-icons/md'
import React, { useState } from 'react';

const CustomVideoPlayer = ({ src }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    videoRef.current.volume = volume;
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className='absolute top-0'>
      <div className='relative'>
        <video ref={videoRef} controls={false} src={src} autoPlay onMouseOver={handleMouseOut}/>
        <b className='absolute top-2 right-2' onMouseOver={handleMouseOver}>
          <MdVolumeUp className='bg-blue-600 w-9 h-10 text-gray-50 py-1 px-2 hover:rounded-r-md cursor-pointer' onMouseOver={handleMouseOver}
           />
        </b>
        {isHovering &&
          <div className='bg-gray-600 h-10 absolute top-2 right-11 flex items-center px-4 py-2 rounded-l-md'>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="1"
              onChange={handleVolumeChange}
              className=''
            />
          </div>
        }
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
