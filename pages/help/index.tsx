import React, { useState } from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import Head from 'next/head'

import CallUs from '../components/C/CallUs'
import GiveFeedBack from '../components/G/GiveFeedBack'
import { MdAddIcCall, MdContactMail, MdOutlineFeedback, MdReportProblem } from 'react-icons/md'
import ProblemsForm from '../components/P/ProblemsForm'
import ContactUs from '../components/C/ContactUs'

const Help = () => {

    const [isActive, setActive] = useState<any>(true);
    const handleToggle = () => {
        setActive(!isActive);
        setCall(false);
        setFeed(false);
        setProb(false);
    };

    const [call, setCall] = useState<any>(false);
    const handleCall = () => {
        setCall(!call);
        setActive(false);
        setFeed(false);
        setProb(false);
    };

    const [feed, setFeed] = useState<any>(false);
    const handleFeed = () => {
        setFeed(!call);
        setCall(false);
        setActive(false);
        setProb(false);
    };
    const [prob, setProb] = useState<any>(false);
    const handleProb = () => {
        setProb(!call);
        setCall(false);
        setActive(false);
        setFeed(false)
    };

    return (
        <div className='Help-Page'>
            <Head>
                <title>W10 || Help</title>
            </Head>
            <Header />
            <CategoryTabs />
            <ul className="helps-content flex flex-wrap gap-4 w-full justify-center">
                <li className="gap-2 flex items-center cursor-pointer helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2" onClick={handleToggle}><b><MdContactMail /></b><b>Contact Us</b></li>
                <li className="gap-2 flex items-center cursor-pointer helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2" onClick={handleCall}><b><MdAddIcCall /></b><b>Call To Us</b></li>
                <li className="gap-2 flex items-center cursor-pointer helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2" onClick={handleFeed}><b><MdOutlineFeedback /></b> <b>Give Your Feedback</b></li>
                <li className="gap-2 flex items-center cursor-pointer helpLink border-gray-200 border-2 shadow-md shadow-gray-300 px-4 py-2 my-2 rounded-md mx-2" onClick={handleProb}><b><MdReportProblem /></b><b>Describe your Problem</b></li>
            </ul>
            <div className="show-data-box">
                {isActive && <ContactUs />}
                {call && <CallUs />}
                {feed && <GiveFeedBack />}
                {prob && <ProblemsForm />}
            </div>
        </div>
    )
}

export default Help
