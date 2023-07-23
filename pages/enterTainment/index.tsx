import Head from 'next/head'
import React from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import EntertainmentCard from '../components/E/EntertainmentCard'
import MobileCategHeader from '../components/M/MobileCategHeader'
import Space from '../components/S/Space'

const index = () => {
  return (
    <>
      <Head>
        <title>W10 || Entertainment</title>
      </Head>
      <Header />
      <CategoryTabs />
      <div className='main-content flex flex-wrap w-full px-9 py-3 gap-4'>
      <EntertainmentCard />
      <EntertainmentCard />
      </div>
      <b className='text-3xl'>Few More Changes Added soon Practice Sheet Ready to View . <br />
      WEB PAGES ARE IN DEVELOPING mood</b>
      <Space />
      <MobileCategHeader />
    </>
  )
}

export default index
