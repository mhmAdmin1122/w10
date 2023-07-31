import axios from 'axios';
import React, { useState } from 'react'

const ProblemsForm = () => {
  const [problems, setProblems] = useState('');

  async function probHandle(ev) {
    ev.preventDefault()
    const data = { problems }
    const response = await axios.post('/api/problems', data);
    if (response.ok) {
      alert('Form submission failed.');
    } else {
      setProblems('')
    }
  }
  return (
    <>
      <form className='ProblemsForm grid justify-items-center w-full' onSubmit={probHandle}>
        <label htmlFor="problems">Problems</label>
        <textarea name="problems" value={problems} id="problems" cols={30} rows={10} onChange={ev => setProblems(ev.target.value)} placeholder='Describe your Problems.....'></textarea>
        <button type='submit' className='bg-gray-500 text-gray-50 py-2 px-4 rounded-lg'>Submit</button>
      </form>
    </>
  )
}

export default ProblemsForm
