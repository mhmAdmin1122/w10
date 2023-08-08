import React from 'react'
import Image from 'next/image'
import hasaanPic from '@/public/img/hasaan.jpeg'
import shoaibPic from '@/public/img/shoaib1.jpg'
import umarPic from '@/public/img/muzi.jpg'
import { FaUserSecret } from 'react-icons/fa'

const TeamCard = () => {
    return (
        <div className='flex flex-wrap justify-center w-full gap-6 my-4'>

            <div className='card-Container'>

                <div className="imageBox">
                    <Image src={hasaanPic} alt={'t-crd'} className='w-80 h-96' />
                </div>

                <div className="card-body">
                    <b>
                        <b><FaUserSecret /></b>
                        <b>Muhammad Hasaan</b>
                    </b>
                    <p>Senior Full-Stack Developer / CEO</p>
                </div>

            </div>

            <div className='card-Container'>

                <div className="imageBox">
                    <Image src={shoaibPic} alt={'t-crd'} className='w-80 h-96' />
                </div>

                <div className="card-body">
                    <b>
                        <b><FaUserSecret /></b>
                        <b>Shoaib Abbas</b>
                    </b>
                    <p>Senior Graphic Designer / Manager</p>
                </div>

            </div>

            <div className='card-Container'>

                <div className="imageBox">
                    <Image src={umarPic} alt={'t-crd'} className='w-80 h-96' />
                </div>

                <div className="card-body">
                    <b>
                        <b><FaUserSecret /></b>
                        <b>Muzamil Jameel</b>
                    </b>
                    <p>E-mail Marketing / Digital Marketing</p>
                </div>

            </div>

        </div>
    )
}

export default TeamCard
