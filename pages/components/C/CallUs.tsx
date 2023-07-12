import Link from 'next/link'
import React from 'react'
import { MdOutlineContactPhone } from 'react-icons/md'

const CallUs = () => {
    return (
        <div className='grid items-center justify-center '>
            <Link href={"tel:03042779800"}>
                <div className='flex text-center items-center justify-center'>
                    <div title='Call Now' className="call-now flex items-center text-xl font-medium cursor-pointer px-4 py-2 rounded-md my-4 gap-2 border-2 border-gray-200 shadow-md shadow-gray-300">
                        <b><MdOutlineContactPhone /></b>
                        <b>Call Now</b>
                    </div>
                </div>
                <div className="mapView">
                    <b>View Map Direction</b>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28957.57774046163!2d67.1055872!3d24.8741888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1689173017164!5m2!1sen!2s" width="600" height="450" loading="lazy" className='rounded-lg shadow-md shadow-gray-300 my-4 map-view-frame'></iframe>
                </div>
            </Link>
        </div>
    )
}

export default CallUs
