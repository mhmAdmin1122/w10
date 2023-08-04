import React from 'react'
import Header from '../H/Header'
import CategoryTabs from '../C/CategoryTabs'
import Footer from '../F/Footer'
import CopyRightLine from '../C/CopyRightLine'
import MobileCategHeader from '../M/MobileCategHeader'

const WebLayout = ({ children }: any) => {
    return (
        <>
            <Header />
            <CategoryTabs />
            {children}
            <Footer />
            <CopyRightLine />
            <MobileCategHeader />
        </>
    )
}

export default WebLayout
