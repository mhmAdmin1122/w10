import React, { useState } from 'react'
import axios from 'axios';
import SuccessMessage from '../S/SuccessMessage';

const EnterTainmentCard = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [pic, setPic] = useState(null)
  const [video, setVideo] = useState('')
  const [category, setCategory] = useState('')
  const [active, setActive] = useState(false);

  const onclickFunc = () => {
    setActive(true)
  }

  // image datbase reader url-generator
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPic(reader.result);
    }
    reader.onerror = (error) => {
      console.log('Error', error)
    }
  };

  async function entertainment(ev) {
    ev.preventDefault()
    const data = { title, description, pic, video, category}
    const response = await axios.post('/api/entertainment', data);
    console.log(response)
    if (response.ok) {
      alert('Form submission failed.');
    } else {
      setTitle('')
      setDescription('')
      setPic(null)
      setVideo('')
      setCategory('')
    }

  }

  return (
    <form className="ent-frm-label grid justify-center" onSubmit={entertainment}>
      <b className='text-center text-lg my-2 cursor-context-menu'>Entertainment Uploader</b>
      <label htmlFor="EntertainmentTitle">Title</label>
      <input value={title} onChange={ev => setTitle(ev.target.value)} type="text" id='EntertainmentTitle' placeholder='title' />
      <label htmlFor="EntertainmentPic">Image</label>
      <input onChange={handleFileChange} type="file" id='EntertainmentPic' accept='.png, .jpg, .gif' />
      <label htmlFor="desc">Description</label>
      <textarea value={description} onChange={ev => setDescription(ev.target.value)} rows={5} cols={40} id='desc' placeholder='Description' />
      <label htmlFor="uploadVideo">Video Path:</label>
      <input value={video} onChange={ev => setVideo(ev.target.value)} type="text" id='uploadVideo' accept='video/*' placeholder='Video Path' />
      <label htmlFor="type">Video Type</label>
      <input type="text" value={category} id="type" onChange={ev => setCategory(ev.target.value)} placeholder='type' />
      <button type="submit" className='bg-gray-500 text-gray-50 font-bold px-4 py-2 my-2 rounded-lg cursor-pointer' onClick={onclickFunc}>Upload</button>
      {active ?
        <SuccessMessage />
        : ""}
    </form>
  )
}

export default EnterTainmentCard;
