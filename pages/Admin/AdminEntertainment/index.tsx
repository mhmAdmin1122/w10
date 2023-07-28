import EnterTainmentCard from '@/pages/components/Admin-components/EnterTainmentCard'
import Layout from '@/pages/components/Admin-components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <Head>
        <title>W10 || Ent-Uploader</title>
      </Head>
      <EnterTainmentCard />
    </Layout>
  )
}

export default index;
