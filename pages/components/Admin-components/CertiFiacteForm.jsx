import React, { useState } from 'react'
import SuccessMessage from '../S/SuccessMessage'
import axios from 'axios'

const CertiFiacteForm = () => {

  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState()
  const [courseShortDesc, setCourseShortDesc] = useState('')
  const [courseDesc, setCourseDesc] = useState('')
  const [coursePic, setCoursePic] = useState('')
  const [active, setActive] = useState(false);

  const onclickFunc = () => {
    setActive(true)
  }

  async function certification(ev) {
    ev.preventDefault()
    const data = {
      courseTitle,
      coursePrice,
      courseShortDesc,
      courseDesc,
      coursePic
    }
    const response = await axios.post('/api/certificate', data);
    console.log(response)
    if (response.ok) {
      alert('Form submission failed.');
    } else {
      setCourseTitle('');
      setCoursePrice();
      setCourseShortDesc('');
      setCourseDesc('');
      setCoursePic('');
    }

  }

  return (
    <form className='grid certi-builder justify-center' onSubmit={certification}>
      <b className='text-center text-2xl font-bold my-6'>Certificate Card Builder</b>
      <label htmlFor="cert-title">Certifiacte Course Name</label>
      <input type="text" id="cert-title" placeholder='Title' value={courseTitle} onChange={ev => setCourseTitle(ev.target.value)} />
      <label htmlFor="crse-price">Course Price</label>
      <input type="number" id='crse-price' placeholder='$123...' value={coursePrice} onChange={ev => setCoursePrice(ev.target.value)} />
      <label htmlFor="Course-cardDesc">Short Description</label>
      <textarea name="" id="Course-cardDesc" cols={30} rows={4} placeholder='Short Description' value={courseShortDesc} onChange={ev => setCourseShortDesc(ev.target.value)} />
      <label htmlFor="cardPic">Image</label>
      <input type="file" id="crd-pic" accept='image/*' value={coursePic} onChange={ev => setCoursePic(ev.target.value)} />
      <label htmlFor="More-about">Description</label>
      <textarea id="More-about" cols={30} rows={4} placeholder='Description' value={courseDesc} onChange={ev => setCourseDesc(ev.target.value)} />
      <div className="submitBtn grid justify-center mt-6">
        <button type='submit' onClick={onclickFunc} className='bg-gray-600 text-gray-100 text-xl py-4 px-8 rounded-lg mt-4 font-bold cursor-pointer'>Upload</button>
      </div>
      {
        active && <SuccessMessage />
      }
    </form>
  )
}

export default CertiFiacteForm;
