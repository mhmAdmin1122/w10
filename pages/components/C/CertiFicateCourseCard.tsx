import Image from 'next/image';
import React from 'react';
import CardPic from '../../../public/img/crdPic.png'
import Link from 'next/link';

const CertiFicateCourseCard = () => {
  return (
    <div className='w-64 h-auto border-2 border-gray-200 shadow-lg shadow-gray-300 rounded-lg overflow-hidden'>
      <div className="cardPic-Box">
        <Image src={CardPic} alt='card-pic-cert' />
      </div>
      <div className="card-Body px-2 py-1">
        <b>Card Title</b>
        <p>Card Description</p>
        <Link href={'/certificate'}>
          <button>Enroll Now</button>
        </Link>
      </div>
    </div>
  )
}

export default CertiFicateCourseCard;
