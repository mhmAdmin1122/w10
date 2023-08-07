import React from 'react'
import Slider from 'react-slick'
import data from '../../json/featuredCourses.json'
import CourseCard from '../C/CourseCard'

const Slide = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    infinite: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: false
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: false
                }
            }
        ]
    };

    return (
        <div className='container relative z-0'>
            <Slider {...settings}>
                {data.map((data: any) => (
                    <CourseCard data={data} key={data.id} />
                ))}
            </Slider>
        </div>
    )
}

export default Slide;
