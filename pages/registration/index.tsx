import React from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import MobileCategHeader from '../components/M/MobileCategHeader'
import Head from 'next/head'
import Link from 'next/link'
import { SiGnuprivacyguard } from 'react-icons/si'

const index = () => {
    return (
        <>
            <Head>
                <title>W10 || Sign-up Form</title>
            </Head>
            <Header />
            <CategoryTabs />
            <div className="form-box">
                <form className='sign-up-form grid justify-center'>
                    <b className='text-center mt-4 flex flex-wrap items-center justify-center gap-2'><b><SiGnuprivacyguard /></b><b>Sign-up Now!</b></b>
                    <label htmlFor="fname">First Name</label>
                    <input placeholder='First Name' type="text" id='fname' />
                    <label htmlFor="lname">Last Name</label>
                    <input placeholder='Last Name' type="text" id='lname' />
                    <label htmlFor="uname">Username</label>
                    <input placeholder='@username123...' type="text" id='uname' />
                    <label htmlFor="email">E-mail</label>
                    <input placeholder='Email@xyz.com' type="text" id='email' />
                    <label htmlFor="passwfAtm">Password</label>
                    <input placeholder='********' type="password" id='passwfAtm' />
                    <label htmlFor="passwConf">Confirm Password</label>
                    <input placeholder='********' type="password" id='passwConf' />
                    <label htmlFor="rd-select" className='rd-select text-base font-medium text-red-400'>
                        <input type="checkbox" name="" id="rd-select" className='mr-2' />
                        Are you sure
                    </label>
                    <button className='bg-gray-500 text-gray-100 mb-4 mt-2 py-2 rounded-md font-bold' type='submit'>Register Now</button>
                    <p className='text-right'>Already have account.. <Link href={"/login"} className='text-blue-500 underline'>Login Now</Link>?</p>
                </form>
            </div>
            <MobileCategHeader />
        </>
    )
}

export default index
