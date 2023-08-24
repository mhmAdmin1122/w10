import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/H/Header'
import EntertainmentCard from '../components/E/EntertainmentCard'
// import Space from '../components/S/Space'
import axios from 'axios'
import Footer from '../components/F/Footer'
import WebLayout from '../components/L/WebLayout'

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
      <WebLayout>
        <div className='flex flex-wrap gap-6 justify-center py-6 px-10 bg-purple-300'>
          {enterCardData.map((enterCardData: string) => (
            <EntertainmentCard data={enterCardData} key={keyRotation + 1} />
          ))}
        </div>
      </WebLayout>
    </>
  )
}

export default EnterTainment;
