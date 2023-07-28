import CertiFiacteForm from '@/pages/components/Admin-components/CertiFiacteForm'
import Layout from '@/pages/components/Admin-components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <Head>
        <title>W10 || Certificate Uploader</title>
      </Head>
      <CertiFiacteForm />
    </Layout>
  )
}

export default index
