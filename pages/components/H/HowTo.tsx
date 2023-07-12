import React from 'react'
import logoPic from '../../../public/img/logo1.png'
import Image from 'next/image'

const HowTo = () => {
    return (
        <div className='how-to flex flex-start'>
            <div className='text_orr h-auto bg-gray-500 text-white px-4 py-2 my-1 ml-2'>
                <b>H O W   T O</b>
            </div>
            <div className='pr-8 pl-3 py-2 how-to-box'>

                <h1 className='font-extrabold text-2xl mb-2'>How To!</h1>
                <p>How to W10 in Your Education Journey: Unveiling the Path to Success!</p>

                <div className="card-dev-box flex flex-wrap items-center gap-4 justify-center justify-items-center w-full">
                    <div className="howToCard border-2 border-gray-200 w-44 my-2 rounded-lg shadow-md shadow-gray-300 grid justify-center items-center justify-items-center">
                        <div className="cardPic w-44">
                            <Image src={logoPic} alt='pic-card' className='w-full' />
                        </div>
                        <div className="cardTitle">
                            <h3>How to Become <abbr title="Full-Stack Developer" className='cursor-pointer no-underline font-bold'>FSD</abbr></h3>
                        </div>
                    </div>

                    <div className="howToCard border-2 border-gray-200 w-44 my-2 rounded-lg shadow-md shadow-gray-300 grid justify-center items-center justify-items-center">
                        <div className="cardPic w-44">
                            <Image src={logoPic} alt='pic-card' className='w-full' />
                        </div>
                        <div className="cardTitle">
                            <h3>How to Become <abbr title="Front-End Developer" className='cursor-pointer no-underline font-bold'>FED</abbr></h3>
                        </div>
                    </div>

                    <div className="howToCard border-2 border-gray-200 w-44 my-2 rounded-lg shadow-md shadow-gray-300 grid justify-center items-center justify-items-center">
                        <div className="cardPic w-44">
                            <Image src={logoPic} alt='pic-card' className='w-full' />
                        </div>
                        <div className="cardTitle">
                            <h3>How to Become <abbr title="Back-End Developer" className='cursor-pointer no-underline font-bold'>BED</abbr></h3>
                        </div>
                    </div>

                    <div className="howToCard border-2 border-gray-200 w-44 my-2 rounded-lg shadow-md shadow-gray-300 grid justify-center items-center justify-items-center">
                        <div className="cardPic w-44">
                            <Image src={logoPic} alt='pic-card' className='w-full' />
                        </div>
                        <div className="cardTitle">
                            <h3>How to Become <abbr title="Database Developer" className='cursor-pointer no-underline font-bold'>DBD</abbr></h3>
                        </div>
                    </div>

                    <div className="howToCard border-2 border-gray-200 w-44 my-2 rounded-lg shadow-md shadow-gray-300 grid justify-center items-center justify-items-center">
                        <div className="cardPic w-44">
                            <Image src={logoPic} alt='pic-card' className='w-full' />
                        </div>
                        <div className="cardTitle">
                            <h3>How to Become <abbr title="UI/UX Designing" className='cursor-pointer no-underline font-bold'>UIUXD</abbr></h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowTo
