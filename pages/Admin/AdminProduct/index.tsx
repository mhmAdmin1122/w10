import Layout from '@/pages/components/Admin-components/Layout/Layout'
import ProductForm from '@/pages/components/Admin-components/ProductForm'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <Layout>
            <Head>
                <title>W10 || Product Form</title>
            </Head>
            <ProductForm />
        </Layout>
    )
}

export default index
