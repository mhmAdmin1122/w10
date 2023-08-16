import React, { useState } from 'react'
import SuccessMessage from '../S/SuccessMessage'
import axios from 'axios'

const FeaturedCourseUploader = () => {

    const [name, setName] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')
    const [pic, setPic] = useState('')
    const [active, setActive] = useState(false)

    const onclickFunc = () => {
        setActive(true)
    }

    async function fetCourse(ev) {
        ev.preventDefault()
        const data = {
            name,
            shortDesc,
            desc,
            category,
            pic
        }
        const response = await axios.post('/api/featuredCourse', data);
        console.log(response)
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setName('');
            setShortDesc('');
            setDesc('');
            setCategory('');
            setPic('');
        }

    }

    return (
        <form className='grid FCUPLODER justify-center' onSubmit={fetCourse}>
            <label htmlFor="">Course Name:</label>
            <input type="text" placeholder='Course Name' value={name} onChange={ev => setName(ev.target.value)} />
            <label htmlFor="">Short Description:</label>
            <textarea rows={5} cols={8} placeholder='Short Description' value={shortDesc} onChange={ev => setShortDesc(ev.target.value)} />
            <label htmlFor="">Long Description:</label>
            <textarea rows={5} cols={8} placeholder='Long Description' value={desc} onChange={ev => setDesc(ev.target.value)} />
            <label htmlFor="">Course Category</label>
            <input type="text" placeholder='Category' value={category} onChange={ev => setCategory(ev.target.value)} />
            <p className='text-gray-400'>{"( Programming, Data-Entry, DBMS, etc... )"}</p>
            <label htmlFor="">Course Card Pic</label>
            <input type="file" accept='.jpg, .png, .gif' value={pic} onChange={ev => setPic(ev.target.value)} />
            <div className="subbtn grid justify-center mt-6">
                <button type='submit' onClick={onclickFunc} className='bg-gray-600 text-gray-100 text-xl py-4 px-8 rounded-lg mt-4 font-bold cursor-pointer'>Upload</button>
            </div>
            {
                active && <SuccessMessage />
            }
        </form>
    )
}

export default FeaturedCourseUploader
