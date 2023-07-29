import axios from 'axios';
import React, { useState } from 'react'

const GiveFeedBack = () => {
  const [feedBack, setFeedBack] = useState('');

  async function feedback(ev: any) {
    ev.preventDefault()
    const data = { feedBack }
    await axios.post('/api/feedBack', data)
  }
  return (
    <>
      <form className='feedForm grid justify-items-center w-full' onSubmit={feedback}>
        <label htmlFor="fedbck">Feedback</label>
        <textarea name="fedbck" value={feedBack} id="fedbck" cols={30} rows={10} placeholder='Feedback Message....' onChange={ev => setFeedBack(ev.target.value)}></textarea>
        <button type='submit' className='bg-gray-500 text-gray-50 py-2 px-4 rounded-lg'>Submit</button>
      </form>
    </>
  )
}

export default GiveFeedBack;