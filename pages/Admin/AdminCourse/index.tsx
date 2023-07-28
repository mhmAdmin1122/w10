import CoursesForm from '@/pages/components/Admin-components/CoursesForm'
import Layout from '@/pages/components/Admin-components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <Layout>
            <Head>
                <title>W10 || Courses-Uploader</title>
            </Head>
            <CoursesForm />
        </Layout>
    )
}

export default index
