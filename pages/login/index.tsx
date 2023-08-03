import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import MobileCategHeader from '../components/M/MobileCategHeader'
import { SiGnuprivacyguard } from 'react-icons/si'

const index = () => {
    return (
        <>
            <Head>
                <title>W10 || Login Form</title>
            </Head>
            <Header />
            <CategoryTabs />
            <div className="logInForm">
                <form className='loginForm grid justify-center'>
                    <b className='text-center mt-4 flex flex-wrap items-center justify-center gap-2'><b><SiGnuprivacyguard /></b><b>Login Now!</b></b>
                    <label htmlFor="email-username">E-mail / Username / Phone</label>
                    <input type="text" placeholder='example@xyz.com' />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='********' />
                    <button type='submit' className='bg-gray-500 text-gray-100 font-bold py-2 rounded-md mt-2'>Login</button>
                    <p className='text-right  mt-2'>Create an account.. <Link href={"/registration"} className='text-blue-500 underline'>Register Now</Link>?</p>
                </form>
            </div>
            <MobileCategHeader />
        </>
    )
}

export default index
