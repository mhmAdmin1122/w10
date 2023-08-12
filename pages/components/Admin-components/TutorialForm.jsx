import axios from 'axios'
import React, { useState } from 'react'
import SuccessMessage from '../S/SuccessMessage'

const TutorialForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pic, setPic] = useState('')
    const [video, setVideo] = useState('')
    const [type, setType] = useState('')
    const [active, setActive] = useState(false);

    const onclickFunc = () => {
        setActive(true)
    }

    async function tutorial(ev) {
        ev.preventDefault()
        const data = { title, description, pic, video, type }
        const response = await axios.post('/api/tutorial', data);
        console.log(response)
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setTitle('')
            setDescription('')
            setPic('');
            setVideo('')
            setType('')
        }

    }

    return (
        <form className="grid tut-frm-label justify-center" onSubmit={tutorial}>
            <b className='text-center text-lg my-2 cursor-context-menu'>Tutorial Uploader</b>
            <label htmlFor="EntertainmentTitle">Title</label>
            <input value={title} onChange={ev => setTitle(ev.target.value)} type="text" id='EntertainmentTitle' placeholder='Title' />
            <label htmlFor="EntertainmentPic">Image</label>
            <input value={pic} onChange={ev => setPic(ev.target.value)} type="file" id='EntertainmentPic' accept='image/*' />
            <label htmlFor="desc">Description</label>
            <textarea value={description} onChange={ev => setDescription(ev.target.value)} rows={5} cols={40} id='desc' placeholder='Description'></textarea>
            <label htmlFor="uploadVideo">Video Link</label>
            <input value={video} onChange={ev => setVideo(ev.target.value)} type="file" id='uploadVideo' accept='video/*' />
            <label htmlFor="Type">Type</label>
            <input value={type} onChange={ev => setType(ev.target.value)} type="text" id='Type' placeholder='Type' />
            <button type="submit" onClick={onclickFunc} className='bg-gray-500 text-gray-50 font-bold px-4 py-2 my-2 rounded-lg cursor-pointer'>Upload</button>
            {active ?
                <SuccessMessage />
                : ""}
        </form>
    )
}

export default TutorialForm
