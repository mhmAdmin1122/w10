import React, { useState } from 'react'
import Header from '../components/H/Header'
import CategoryTabs from '../components/C/CategoryTabs'
import Head from 'next/head'
import CallUs from '../components/C/CallUs'
import GiveFeedBack from '../components/G/GiveFeedBack'
import { MdAddIcCall, MdContactMail, MdOutlineFeedback, MdReportProblem } from 'react-icons/md'
import ProblemsForm from '../components/P/ProblemsForm'
import ContactUs from '../components/C/ContactUs'
import WebLayout from '../components/L/WebLayout'

const Help = () => {

    const [isActive, setActive] = useState<any>(true);
    const [call, setCall] = useState<any>(false);
    const [feed, setFeed] = useState<any>(false);
    const [prob, setProb] = useState<any>(false);

    const handleToggle = () => {
        setActive(!isActive);
        setCall(false);
        setFeed(false);
        setProb(false);
    };

    const handleCall = () => {
        setCall(!call);
        setActive(false);
        setFeed(false);
        setProb(false);
    };

    const handleFeed = () => {
        setFeed(!call);
        setCall(false);
        setActive(false);
        setProb(false);
    };

    const handleProb = () => {
        setProb(!call);
        setCall(false);
        setActive(false);
        setFeed(false)
    };

    return (
        <>
            <Head>
                <title>W10 || Help</title>
            </Head>
            <WebLayout>
                <div className='bg-purple-400 py-4'>

                    <ul className="helps-content flex flex-wrap gap-4 w-full justify-center text-gray-50">

                        <li className="bg-purple-700" onClick={handleToggle}><b><MdContactMail /></b><b>Contact Us</b></li>

                        <li className="bg-purple-800" onClick={handleCall}><b><MdAddIcCall /></b><b>Call To Us</b></li>

                        <li className="bg-purple-700" onClick={handleFeed}><b><MdOutlineFeedback /></b> <b>Give Your Feedback</b></li>

                        <li className="bg-purple-800" onClick={handleProb}><b><MdReportProblem /></b><b>Describe your Problem</b></li>

                    </ul>

                    <div className="show-data-box">
                        {isActive && <ContactUs />}
                        {call && <CallUs />}
                        {feed && <GiveFeedBack />}
                        {prob && <ProblemsForm />}
                    </div>

                </div>

            </WebLayout>
        </>
    )
}

export default Help
