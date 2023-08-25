import React, { useState } from 'react'
import WebLayout from '../components/L/WebLayout'
import { mongooseConnection } from '@/lib/mongoEnter'
import { Entertainment } from '@/models/entertainment'
import Image from 'next/image'
import Head from 'next/head'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { RiDislikeLine, RiDislikeFill } from 'react-icons/ri'

export default function EntatinmentDetail({ enterTainment }) {
    const [activeLike, setActiveLike] = useState(true)
    const [activeDisLike, setActiveDisLike] = useState(true)
    const [like, setLike] = useState(1200)
    const [disLike, setDisLike] = useState(0)

    const onLikeClick = () => {
        setActiveLike(false)
        setLike(like + 1)
        setActiveDisLike(true)
    }
    const onDisLikeClick = () => {
        setActiveDisLike(false)
        setDisLike(disLike + 1)
        setActiveLike(true)
    }
    const onFillLike = () => {
        setActiveLike(true)
        setLike(like - 1)
    }
    const onDisFillLike = () => {
        setActiveDisLike(true)
        setDisLike(disLike - 1)
    }

    return (
        <WebLayout>
            <Head>
                <title>W10 || {enterTainment?.title}</title>
            </Head>
            <div className="playerAndLike_Container px-14 py-6">
                <div className="w-[700px] h-[450px]">
                    <video controls className='w-full h-full rounded-lg overflow-hidden'>
                        <source src={enterTainment?.video} />
                    </video>
                </div>
                <div className="titlebox my-2">
                    <b>{enterTainment?.title}</b>
                </div>
                <div className="AccadmyLogoandLikeBtn flex flex-wrap items-center justify-between w-[700px] pr-3">
                    <div className="logoBox flex items-center gap-2">
                        <Image src="/img/logo.png" alt={enterTainment?.title} width={80} height={80} className='shadow-md shadow-gray-400 rounded-full border border-gray-300 cursor-pointer' />
                        <div className="nameOfAccad">
                            <b className='cursor-context-menu'>World10.tech</b><br />
                            <b className='text-blue-500 cursor-context-menu'>Close TO World</b>
                        </div>
                    </div>
                    <div className="likebtnBox flex flex-wrap gap-2 bg-purple-400 rounded-md overflow-hidden">
                        <div className="likeBx flex flex-wrap gap-4 px-4 py-2 bg-purple-500">
                            {activeLike ? <FaRegHeart className='cursor-pointer text-white text-2xl' onClick={onLikeClick} /> :
                                <FaHeart className='cursor-pointer text-white text-2xl' onClick={onFillLike} />}
                            <b className="counterLike">{like}</b>
                        </div>
                        <div className="dislikeBox flex flex-wrap gap-4 px-4 py-2 bg-purple-500">
                            {activeDisLike ? <RiDislikeLine className='cursor-pointer text-white text-2xl' onClick={onDisLikeClick} /> :
                                <RiDislikeFill className='cursor-pointer text-white text-2xl' onClick={onDisFillLike} />}
                            <b className="counterdisLike">{disLike}</b>
                        </div>
                    </div>
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