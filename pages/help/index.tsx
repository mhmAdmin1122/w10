import React from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import Link from 'next/link'
import Head from 'next/head'
import ContactUs from '../components/C/ContactUs'
import CallUs from '../components/C/CallUs'

const help = () => {
    return (
        <div className='Help-Page'>
            <Head>
                <title>W10 || Help</title>
            </Head>
            <Header />
            <CategoryTabs />
            <ul className="helps-content flex flex-wrap gap-4 w-full justify-center">
                <Link href={"/"}><li className="helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2">Contact Us</li></Link>
                <Link href={"/"}><li className="helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2">Call To Us</li></Link>
                <Link href={"/"}><li className="helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2">Give Your Feedback</li></Link>
                <Link href={"/"}><li className="helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2">Describe your Problem</li></Link>
            </ul>
            <div className="show-data-box">
                <ContactUs />
                <CallUs />
            </div>
        </div>
    )
}

export default help
