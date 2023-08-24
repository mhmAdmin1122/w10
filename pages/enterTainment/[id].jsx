import React from 'react'
import WebLayout from '../components/L/WebLayout'
import { mongooseConnection } from '@/lib/mongoEnter'
import { Entertainment } from '@/models/Entertainment'
import Image from 'next/image'
import Head from 'next/head'

export default function EntatinmentDetail({ enterTainment }) {
    return (
        <WebLayout>
            <Head>
                <title>W10 || {enterTainment?.title}</title>
            </Head>
            <div className="playerAndLike_Container px-14 py-6">
                <div className="w-[600px] h-[350px]">
                    <video controls className='w-full h-full rounded-lg overflow-hidden'>
                        <source src={enterTainment?.video} />
                    </video>
                </div>
                <div className="titlebox my-2">
                    <b>{enterTainment?.title}</b>
                </div>
                <div className="AccadmyLogoandLikeBtn">
                    <div className="logoBox flex items-center gap-2">
                        <Image src="/img/logo.png" alt={enterTainment?.title} width={80} height={80} className='shadow-md shadow-gray-400 rounded-full border border-gray-300 cursor-pointer' />
                        <div className="nameOfAccad">
                            <b className='cursor-context-menu'>World10.tech</b><br />
                            <b className='text-blue-500 cursor-context-menu'>Close TO World</b>
                        </div>
                    </div>
                    <div className="likebtnBox"></div>
                </div>
            </div>
        </WebLayout>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnection();
    const { id } = context.query
    const enterTainment = await Entertainment.findById(id)
    return {
        props: {
            enterTainment: JSON.parse(JSON.stringify(enterTainment))
        }
    }
}