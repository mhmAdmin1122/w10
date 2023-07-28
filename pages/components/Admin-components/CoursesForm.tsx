import React from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'

const CoursesForm = () => {
    return (
        <div>
            <form className='grid justify-center'>
                {/* card info */}
                <div className="crdContent grid gap-2 justify-center">
                    <b className='text-2xl text-center'>Card Info</b>
                    <div className='flex'>
                        <div className='grid mr-7'>
                            <label htmlFor="CardTitle">Title Of Post</label>
                            <input type="text" id="CardTitle" placeholder='Post Title' />
                            <label htmlFor="Postdesc">About Post</label>
                            <textarea id="Postdesc" cols={30} rows={4} placeholder='About Post'></textarea>
                            <label htmlFor="CategoryPost">Post Category</label>
                            <select id='CategoryPost'>
                                <option value="Programming">Programming</option>
                                <option value="ContentWriting">Content Writing</option>
                                <option value="Designing">Designing</option>
                                <option value="BussinessManagment">Bussiness Managment</option>
                            </select>
                        </div>
                        <div className='grid upload-post-course-pic relative'>
                            <label htmlFor="upload-pic">Post Image</label>
                            <input type="file" id="upload-pic" accept='image/*' />
                            <MdOutlineCloudUpload className='bg-gray-100 absolute cursor-pointer top-32 py-9 px-20 w-80 border-2 border-dashed border-gray-500' />
                        </div>
                    </div>
                </div>
                <hr className='mt-4' />
                <hr />

                {/* main-page content info */}
                <div className="mainContent grid justify-center">
                    <b className='text-xl text-center my-4'>Main Content</b>
                    <div className='flex'>
                        <div className='grid mr-8'>
                            <label htmlFor="mhead">main Heading</label>
                            <input type="text" id='mhead' placeholder='Main Heading' />
                            <label htmlFor="desc">Breif Descripion</label>
                            <textarea id="desc" cols={30} rows={4} placeholder='Description'></textarea>
                        </div>
                        <div className='grid upload-post-course-pic relative'>
                            <label htmlFor="upload-pic">Main Image</label>
                            <input type="file" id="upload-pic" accept='image/*' />
                            <MdOutlineCloudUpload className='bg-gray-100 absolute cursor-pointer top-10 py-9 px-20 w-80 border-2 border-dashed border-gray-500' />
                        </div>
                    </div>
                </div>
                <hr className='mt-6' />
                <hr />

                {/* sub-content info */}
                <div className="subContent grid justify-center">
                    <b className='text-lg text-center'>Sub Content</b>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        <div className="sub sub1 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 1:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' />
                            <label htmlFor="FirstSubDesc">Sub-Description 1:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' />
                        </div>
                        <div className="sub sub2 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 2:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' />
                            <label htmlFor="FirstSubDesc">Sub-Description 2:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' />
                        </div>
                        <div className="sub sub3 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 3:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' />
                            <label htmlFor="FirstSubDesc">Sub-Description 3:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' />
                        </div>
                        <div className="sub sub4 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 4:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' />
                            <label htmlFor="FirstSubDesc">Sub-Description 4:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' />
                        </div>
                        <div className="sub sub5 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 5:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' />
                            <label htmlFor="FirstSubDesc">Sub-Description 5:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' />
                        </div>
                    </div>
                </div>
                <hr className='mt-6' />
                <hr />
                <div className='grid upload-Pdf-course-pic relative h-52'>
                    <div className='grid justify-center'>
                        <label htmlFor="upload-pic text-center">Upload PDF / RAR Documents File:</label>
                    </div>
                    <input type="file" id="upload-pic" accept='application/pdf, application/rar' />
                    <MdOutlineCloudUpload className='rounded-md bg-gray-100 absolute cursor-pointer top-10 py-9 px-20 w-80 border-2 border-dashed border-gray-500' />
                </div>
                {/* Submit Btn */}
                <div className="submitBtn grid justify-center mt-6">
                    <button type='submit' className='bg-gray-600 text-gray-100 text-xl py-4 px-8 rounded-lg mt-4 font-bold cursor-pointer'>Upload</button>
                </div>
            </form>
        </div>
    )
}

export default CoursesForm
