import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CourseCard = ({ data }: any) => {
    return (
        <div className='container card grid border-2 border-gray-200 rounded-md overflow-hidden shadow-md shadow-gray-300'>
            <div className="imageBox">
                <Image src={data.image} alt='crd-pic' width={288} height={160} />
            </div>
            <div className="cardBody px-4 py-2 bg-white">
                <b>{data.id}</b>
                <b>{data.cardTitle}</b>
                <p>{data.ShortDesc}</p>
                <Link href={"/"}>
                    <button>Check Now &rarr;</button>
                </Link>
            </div>
        </div>
    )
}

export default CourseCard
