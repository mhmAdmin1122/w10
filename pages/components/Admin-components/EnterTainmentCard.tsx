import Head from 'next/head';
import React from 'react'

const EnterTainmentCard = () => {
  return (
    <div className='grid justify-center'>
      <form className="grid ent-frm-label">
        <b className='text-center text-lg my-2 cursor-context-menu'>Entertainment Uploader</b>
        <label htmlFor="EntertainmentTitle">Title</label>
        <input type="text" id='EntertainmentTitle' />
        <label htmlFor="EntertainmentPic">Image</label>
        <input type="file" id='EntertainmentPic' accept='image/*' />
        <label htmlFor="desc">Description</label>
        <textarea rows={5} cols={40} id='desc' placeholder='Description'></textarea>
        <label htmlFor="uploadVideo">Video Link</label>
        <input type="file" id='uploadVideo' accept='video/*' />
        <label htmlFor=""></label>
        <button type="submit" className='bg-gray-500 text-gray-50 font-bold px-4 py-2 my-2 rounded-lg cursor-pointer'>Upload</button>
      </form>
    </div>
  )
}

export default EnterTainmentCard;
