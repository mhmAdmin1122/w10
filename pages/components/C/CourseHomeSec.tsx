import React from 'react'
import heroPic from '@/public/img/hero-img.png'
import Image from 'next/image'
import { MdHome } from 'react-icons/md'
import Link from 'next/link'
import LanguageCourseSec from '../L/LanguageCourseSec'

const CourseHomeSec = () => {
    return (
        <section className='bg-purple-200 pb-4'>
            <div className="content courseHome-sec flex items-center justify-around content-between w-full bg-no-repeat bg-cover text-gray-800 pb-14 h-auto px-12 ">

                <div className="courseHome-sec-text-box cursor-context-menu">

                    <div className="flex items-center content-center pt-2 mb-2 h-auto tracking-wide ino-txt">
                        <MdHome />
                        <p className="font-extralight pt-1 ml-1">Innovation House</p>
                    </div>

                    <div className="courseHome-sec-txt">
                        <p className='text-6xl font-bold'>
                            Unleash the <br /><span className="t-M"> Tech Marvels</span><br />
                            World 10 Tech
                        </p>
                        <Link href={'/'} className="explore-course-btn py-5 px-6 bg-purple-800 text-gray-100 relative top-8 font-semibold hover:bg-purple-700 rounded-sm">Explore Courses</Link>
                    </div>

                </div>

                <div className="courseHome-sec-img">
                    <Image src={heroPic} alt="hero-pic" height={360} width={420} />
                </div>

            </div>
            <LanguageCourseSec />
        </section>
    )
}

export default CourseHomeSec
