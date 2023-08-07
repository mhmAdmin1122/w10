import React from 'react'
import FeaturedCourseSlider from './FeaturedCourseSlider'

export default function FeaturedCourses() {
    return (
        <>
            <div className="teamCompo_Box grid justify-center justify-items-center bg-purple-400 px-16 py-14" >
                <h1 className='my-4'>Featured Courses</h1>
                <div className="container relative z-0">
                    <FeaturedCourseSlider />
                </div>
            </div>
        </>
    )
}