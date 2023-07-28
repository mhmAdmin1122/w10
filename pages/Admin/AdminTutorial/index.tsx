import Layout from '@/pages/components/Admin-components/Layout/Layout'
import TutorialForm from '@/pages/components/Admin-components/TutorialForm'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <Layout>
            <Head>
                <title>W10 || Tut-Uploader</title>
            </Head>
            <TutorialForm />
        </Layout>
    )
}

export default index
