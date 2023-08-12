import FeaturedCourseUploader from '@/pages/components/Admin-components/FeaturedCourseUploader'
import Layout from '@/pages/components/Admin-components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <Layout>
            <Head>
                <title>W10 || Features-Course-Uploader</title>
            </Head>
            <FeaturedCourseUploader />
        </Layout>
    )
}

export default index
