import React from 'react'
import WebLayout from '../components/L/WebLayout'
import Head from 'next/head'
import Slider from "react-slick";

const index = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <WebLayout>
            <Head>
                <title>W10 || Courses</title>
            </Head>
            <div className="heroBanerCourses">
                <div>
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="top-courses"></div>
            <div className="courseShort-term"></div>
            <div className="beginerCourses"></div>
            <div className="intermediateCourses"></div>
            <div className="addvanceCourses"></div>
        </WebLayout>
    )
}

export default index
