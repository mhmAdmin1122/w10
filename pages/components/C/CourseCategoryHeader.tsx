import Link from 'next/link';
import React from 'react'
import { MdSwipeRightAlt } from 'react-icons/md'

const CourseCategoryHeader = ({ htitle }: any) => {
    return (
        <div className='flex items-center justify-between w-full bg-gray-200 text-purple-700 text-xl py-4 px-3 mb-3'>
            <b className='cursor-context-menu'>{htitle}</b>
            <Link href={"certificate"} className='flex items-center cursor-pointer text-2xl'>
                <p className='m-0'>Find More</p>
                <b className='text-3xl'><MdSwipeRightAlt /></b>
            </Link>
        </div>
    )
}

export default CourseCategoryHeader;