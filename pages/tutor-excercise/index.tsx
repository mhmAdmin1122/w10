import React from 'react'
import Tutorial from '../components/T/Tutorial'
import Head from 'next/head'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import MobileCategHeader from '../components/M/MobileCategHeader'

const index = () => {
    return (
        <>
            <Head>
                <title>W10 || Help</title>
            </Head>
            <Header />
            <CategoryTabs />
            <MobileCategHeader />
            <Tutorial />
        </>
    )
}

export default index
