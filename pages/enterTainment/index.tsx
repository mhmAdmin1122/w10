import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/H/Header'
import EntertainmentCard from '../components/E/EntertainmentCard'
import Space from '../components/S/Space'
import axios from 'axios'
import Footer from '../components/F/Footer'

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
      <div className='flex flex-wrap gap-6 py-6 px-10'>
        {enterCardData.map((enterCardData: string) => (
          <EntertainmentCard data={enterCardData} key={keyRotation + 1} />
        ))}
      </div>
      <Space />
      <Footer />
    </>
  )
}

export default EnterTainment;
