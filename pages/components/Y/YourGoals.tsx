import React from 'react'
import Image from 'next/image'
import distPic1 from '@/public/img/bachi.png'
import distPic2 from '@/public/img/bachi1.png'
import { TiTick } from 'react-icons/ti'
import { GiStairsGoal } from 'react-icons/gi'
import Link from 'next/link'

const YourGoals = () => {
    return (
        <section>

            <b className='flex items-center gap-1 cursor-context-menu justify-center text-2xl mt-4'>
                <b><GiStairsGoal /></b>
                <b>Achieve Goals</b>
            </b>

            <div className="content-2 w-full px-20 py-24 bg-cover relative flex h-auto justify-between">

                <div className="relative z-30 bg-white rounded-md w-2/5 p-12 border-2 border-gray-100 shadow-lg shadow-red-400">

                    <p className="oals w-3/4 h-auto text-3xl text-gray-700 font-extrabold">
                        Achieve Your Goals <br />
                        With World 10
                    </p>

                    <p className="text-xl font-extralight mt-3">
                        You can start and finish one of these popular <br />courses in under
                        a day - for free! Check out <br />
                        the list below..
                    </p>

                    <div className="grid pics">

                        <div className="items-center gap-1 flex flex-wrap p-2">
                            <b className='text-lg text-green-600'><TiTick /></b>
                            <p className="font-medium text-lg">
                                Access to 4,000+ of our top courses
                            </p>
                        </div>

                        <div className="items-center gap-1 flex flex-wrap p-2">
                            <b className='text-lg text-green-600'><TiTick /></b>
                            <p className="">Explore a variety of fresh topics</p>
                        </div>

                        <div className="items-center gap-1 flex flex-wrap p-2">
                            <b className='text-lg text-green-600'><TiTick /></b>
                            <p className="">Find the right instructor for you</p>
                        </div>

                        <div className="items-center gap-1 flex flex-wrap p-2">
                            <b className='text-lg text-green-600'><TiTick /></b>
                            <p className="">Find the right instructor for you</p>
                        </div>

                        <button className="py-5 px-8 text-white bg-red-600 font-semibold w-fit">
                            <Link href={'/'}>Apply Now</Link>
                        </button>

                    </div>

                </div>

                <div className="side-pic relative w-3/5">
                    <Image className="side-pic2 absolute top-1/3 z-20 w-3/5 left-8" src={distPic1} alt="dist-Pic1" />
                    <Image className="side-pic1 absolute -top-5 z-10 w-5/6 left-24" src={distPic2} alt="dist-Pic2" />
                </div>

            </div>

        </section>
    )
}

export default YourGoals;