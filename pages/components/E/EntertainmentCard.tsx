import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const EntertainmentCard = ({ data }: any) => {
  return (
    <div className='Card-Body !w-64 h-auto border-2  bg-white border-gray-200 rounded-lg overflow-hidden shadow-md shadow-gray-300 grid justify-items-center'>
      <div className="CardImage w-full relative">
        <Image src={data?.pic} alt='card-Image' className='h-36 !w-64' width={319} height={180} />
        <div className="badge absolute bg-purple-600 w-fit cursor-pointer rounded-md top-1 right-1 text-white px-4 py-2 text-center">
          <b>{data?.category}</b>
        </div>
      </div>
      <div className="cardDetails w-full px-2 py-1">
        <Link href={`/enterTainment/${data?._id}`} className="fileBtn py-2 hover:text-purple-600">
          <b className='mb-2 cursor-pointer' title={data?.title}>{data?.title.slice(0, 55)}...</b>
        </Link>
        <p className='text-gray-400 text-justify'>
          {data?.description.slice(0, 155)}...
        </p>
      </div>
      <Link href={`/enterTainment/${data?._id}`} className="fileBtn py-2">
        <button className='bg-purple-700 text-gray-100 font-semibold cursor-pointer px-4 py-2 rounded-lg'>View Detail &rarr;</button>
      </Link>
    </div>
  )
}

export default EntertainmentCard;
