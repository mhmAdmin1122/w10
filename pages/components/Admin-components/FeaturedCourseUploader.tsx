import React from 'react'

const FeaturedCourseUploader = () => {
    
    return (
        <form className='grid FCUPLODER justify-center'>
            <label htmlFor="">Course Name:</label>
            <input type="text" placeholder='Course Name'/>
            <label htmlFor="">Short Description:</label>
            <textarea rows={5} cols={8} placeholder='Short Description'/>
            <label htmlFor="">Long Description:</label>
            <textarea rows={5} cols={8} placeholder='Long Description'/>
            <label htmlFor="">Course Category</label>
            <input type="text" placeholder='Category'/>
            <p className='text-gray-400'>{"( Programming, Data-Entry, DBMS, etc... )"}</p>
            <label htmlFor="">Course Card Pic</label>
            <input type="file" accept='.jpg, .png, .gif'/>
        </form>
    )
}

export default FeaturedCourseUploader
