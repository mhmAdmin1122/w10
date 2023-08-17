import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import EntertainmentCard from '../components/E/EntertainmentCard'
import MobileCategHeader from '../components/M/MobileCategHeader'
import Space from '../components/S/Space'
import axios from 'axios'

const EnterTainment = () => {
  const [enterCardData, setEnterCardData] = useState<string | Boolean | Number | null | never | object | any>([]);
  const keyRotation: string = enterCardData?.title;
  useEffect(() => {
    axios.get('/api/entertainment').then(res => {
      setEnterCardData(res.data)
    })
  }, []);

  return (
    <>
      <Head>
        <title>W10 || Entertainment</title>
      </Head>
      <Header />
      <CategoryTabs />
      {enterCardData.map((enterCardData: string) => (
        <EntertainmentCard data={enterCardData} key={keyRotation + 1} />
      ))}
      <Space />
      <MobileCategHeader />
    </>
  )
}

export default EnterTainment;
