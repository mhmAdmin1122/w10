import React from 'react'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import Slide from '../S/Slider'
export default function FeaturedCourses() {
    return (
        <>
            <div className="teamCompo_Box grid justify-center justify-items-center bg-purple-400 px-16 py-14" >
                <b className='font-bold text-2xl flex items-center gap-2 content-center'><MdOutlineFeaturedPlayList />Featured Courses</b>
                <div className="container relative z-0">
                    <Slide />
                </div>
            </div>
        </>
    )
}