import Link from 'next/link'
import React from 'react'
import { MdOutlineContactPhone } from 'react-icons/md'

const CallUs = () => {
    return (
        <div className='grid items-center justify-center '>
            <Link href={"tel:03249489897"}>
                <div title='Call Now' className="call-now flex items-center text-xl font-medium cursor-pointer px-4 py-2 rounded-md my-4 gap-2 border-2 border-gray-200 shadow-md shadow-gray-300">
                    <b><MdOutlineContactPhone /></b>
                    <b>Call Now</b>
                </div>
            </Link>
        </div>
    )
}

export default CallUs
