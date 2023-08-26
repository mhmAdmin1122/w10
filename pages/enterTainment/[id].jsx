import React, { useState } from 'react'
import WebLayout from '../components/L/WebLayout'
import Link from 'next/link'
import { mongooseConnection } from '@/lib/mongoEnter'
import { Entertainment } from '@/models/entertainment'
import Image from 'next/image'
import Head from 'next/head'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { ImEmbed2 } from 'react-icons/im'
import { RiDislikeLine, RiDislikeFill, RiShareForward2Line, RiVideoDownloadFill, RiFacebookCircleLine, RiMessengerLine, RiMailLine, RiFileCopy2Fill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


export default function EntatinmentDetail({ enterTainment }) {
    const [activeLike, setActiveLike] = useState(true)
    const [activeDisLike, setActiveDisLike] = useState(true)
    const [like, setLike] = useState(1200)
    const [disLike, setDisLike] = useState(0)
    const [isCopied, setIsCopied] = useState(false);
    const [popUpActive, setPopUpActive] = useState(false)
    const onShareClick = () => {
        setPopUpActive(current => !current)
    }
    const text = `https://www.world10.tech${enterTainment?.video}`
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Reset the "Copied" state after 2 seconds
            })
            .catch(err => {
                console.error('Copy failed:', err);
            });
    };

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
                            {activeLike ? <FaRegHeart className='cursor-pointer text-white text-2xl hover:text-yellow-400' onClick={onLikeClick} /> :
                                <FaHeart className='cursor-pointer text-white text-2xl hover:text-red-400' onClick={onFillLike} />}
                            <b className="counterLike cursor-context-menu">{like}</b>
                        </div>

                        <div className="dislikeBox flex flex-wrap gap-4 px-4 py-2 bg-purple-500">
                            {activeDisLike ? <RiDislikeLine className='cursor-pointer text-white text-2xl hover:text-yellow-400' onClick={onDisLikeClick} /> :
                                <RiDislikeFill className='cursor-pointer text-white text-2xl hover:text-red-400' onClick={onDisFillLike} />}
                            <b className="counterdisLike cursor-context-menu">{disLike}</b>
                        </div>

                        <div className="shareBtn bg-purple-600 flex flex-wrap gap-4 px-4 py-2" onClick={onShareClick}>
                            <RiShareForward2Line className='cursor-pointer text-white text-2xl hover:text-red-400' title='Share' />
                        </div>

                        <div className="dwd bg-purple-600 flex flex-wrap gap-4 px-4 py-2">
                            <Link
                                href={`/${enterTainment?.video}`}
                                download={`${enterTainment?.title}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <RiVideoDownloadFill className='cursor-pointer text-white text-2xl hover:text-red-400' title='Download' />
                            </Link>
                        </div>

                    </div>

                </div>

                {popUpActive && <div className="popupBox bg-purple-300 border-2 border-gray-200 shadow-md shadow-gray-300 w-[700px] mt-6 px-5 py-4 rounded-md">

                    <b className='text-xl text-center flex flex-wrap justify-center py-2'>Share Us Now!</b>

                    <div className="sharePopUpbOX flex flex-wrap gap-4 justify-center text-3xl">

                        <div className="cursor-pointer hover:bg-gray-600 transition-all duration-1000 ease-in-out hover:text-white bg-purple-400 p-3 rounded-md flex items-center justify-center shadow-md shadow-gray-300" title='Embed'>
                            <ImEmbed2 />
                        </div>

                        <Link href={`https://api.whatsapp.com/send?text=${text}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:bg-green-600 transition-all duration-1000 ease-in-out hover:text-white bg-purple-400 p-3 rounded-md flex items-center justify-center shadow-md shadow-gray-300" title='WhataApp'>
                            <BsWhatsapp />
                        </Link>

                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${text}&display=popup`} target='_blank' className="cursor-pointer hover:bg-blue-600 transition-all duration-1000 ease-in-out hover:text-white bg-purple-400 p-3 rounded-md flex items-center justify-center shadow-md shadow-gray-300" title='Facebook'>
                            <RiFacebookCircleLine />
                        </Link>

                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${text}&amp;src=sdkpreparse`} target="_blank" className="cursor-pointer hover:bg-blue-400 transition-all duration-1000 ease-in-out hover:text-white bg-purple-400 p-3 rounded-md flex items-center justify-center shadow-md shadow-gray-300" title='Messanger'>
                            <RiMessengerLine />
                        </Link>

                        <Link href={`mailto:?subject=${text}`} target="_blank" className="cursor-pointer hover:bg-orange-600 transition-all duration-1000 ease-in-out hover:text-white bg-purple-400 p-3 rounded-md flex items-center justify-center shadow-md shadow-gray-300" title='G-Mail'>
                            <RiMailLine />
                        </Link>

                    </div>

                    <div className="copyLinkInput px-6 py-3 rounded-md my-4 justify-center flex items-center">

                        <b contentEditable className='text-lg flex items-center gap-2 px-3 py-2 border-r-2 border-gray-100 cursor-not-allowed bg-purple-600 rounded-l-md text-white outline-none'>
                            {text}
                        </b>

                        <button onClick={handleCopyClick}>
                            {isCopied
                                ?
                                <div className='text-lg flex items-center gap-2 px-3 py-2 bg-purple-600 rounded-r-md text-white'>
                                    <RiFileCopy2Fill />
                                    <b>Copied!</b>
                                </div>
                                :
                                <div className='text-lg flex items-center gap-2 px-3 py-2 bg-purple-600 rounded-r-md text-white'>
                                    <RiFileCopy2Fill />
                                    <b>Copy</b>
                                </div>
                            }
                        </button>

                    </div>

                </div>}

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