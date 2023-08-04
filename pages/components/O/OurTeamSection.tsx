import React from 'react'
import Image from 'next/image'
import hasaanPic from '@/public/img/MyPic.jpeg'
import shoaibPic from '@/public/img/shoaib.jpeg'
import umarPic from '@/public/img/umar.jpg'
import { BsMicrosoftTeams } from 'react-icons/bs'
import Link from 'next/link'

const OurTeamSection = () => {
    return (
        <section className="bg-purple-600 py-20 grid justify-center justify-items-center relative">

            <p className='text-5xl flex flex-wrap items-center justify-center gap-2 text-gray-50'>
                <b><BsMicrosoftTeams /></b>
                <b>Our Team</b>
            </p>

            <div className="flex gap-7 px-14 pt-8 pb-12 flex-wrap">

                <div className="member relative">
                    <Image src={hasaanPic} alt="hasaan" className='w-80 h-96 rounded-xl' />
                    <div className="bg-purple-900 w-56 px-0.5 py-5 grid justify-center justify-items-center text-center rounded-lg text-gray-50 absolute left-12 -bottom-14 shadow-lg shadow-purple-400">
                        <strong className="font-size: 22px; letter-spacing: 1px; font-weight: 800;">M Hasaan</strong>
                        <span className="text-lg">Co-Founder / Full Stack Developer</span>
                    </div>
                </div>

                <div className="member relative">
                    <Image src={shoaibPic} alt="hasaan" className='w-80 h-96 rounded-xl' />
                    <div className="bg-purple-900 w-56 px-0.5 py-5 grid justify-center justify-items-center text-center rounded-lg text-gray-50 absolute left-12 -bottom-14 shadow-lg shadow-purple-400">
                        <strong className="font-size: 22px; letter-spacing: 1px; font-weight: 800;">Shoaib Abbas</strong>
                        <span className="text-lg">Manager / Graphic Designer & Data Analyst</span>
                    </div>
                </div>

                <div className="member relative">
                    <Image src={umarPic} alt="hasaan" className='w-80 h-96 rounded-xl' />
                    <div className="bg-purple-900 w-56 px-0.5 py-5 grid justify-center justify-items-center text-center rounded-lg text-gray-50 absolute left-12 -bottom-14 shadow-lg shadow-purple-400">
                        <strong className="font-size: 22px; letter-spacing: 1px; font-weight: 800;">Umer Farooq</strong>
                        <span className="text-lg">Web-Designer & Digital Marketer</span>
                    </div>
                </div>

            </div>

            <Link href={'/'} className='bg-purple-900 mt-12 grid justify-items-center justify-center w-fit text-gray-50 rounded-lg px-8 font-bold py-6'>
                More About Team &rarr;
            </Link>

        </section>
    )
}

export default OurTeamSection
