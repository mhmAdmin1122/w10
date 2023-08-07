import React from 'react'
import Slider from 'react-slick'
import data from '../../json/featuredCourses.json'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCourseSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container relative z-0'>
            <Slider {...settings}>
                {data.map((data: any) => (
                    <div className='container card flex border-2 border-gray-200 rounded-md overflow-hidden shadow-md shadow-gray-300' style={{ width: 280, height: 'auto' }} key={data.id}>
                        <div className="imageBox">
                            <Image src={data.image} alt='crd-pic' width={280} height={180} />
                        </div>
                        <div className="cardBody px-4 py-2 bg-white">
                            <b>{data.cardTitle}</b>
                            <p>{data.ShortDesc}</p>
                            <button>Check Now &rarr;</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FeaturedCourseSlider
