import Head from 'next/head'
import React from 'react'
import CategoryTabs from '../components/C/CategoryTabs'
import Header from '../components/H/Header'
import Space from '../components/S/Space'
import MobileCategHeader from '../components/M/MobileCategHeader'
import CertiFicateCourseCard from '../components/C/CertiFicateCourseCard'
import CourseCategoryHeader from '../components/C/CourseCategoryHeader'

const index = () => {
    return (
        <div>
            <Head>
                <title>W10 || Certificate</title>
            </Head>
            <Header />
            <CategoryTabs />
            <CourseCategoryHeader htitle={"Development Courses"} />
            <div className="course-box flex flex-wrap px-14 py-4">
                <CertiFicateCourseCard />
            </div>
            <Space />
            <MobileCategHeader />
        </div>
    )
}

export default index
