import React from 'react'

const GiveFeedBack = () => {
  return (
    <>
      <form className='feedForm grid justify-items-center w-full'>
        <label htmlFor="fedbck">Feedback</label>
        <textarea name="fedbck" id="fedbck" cols={30} rows={10} placeholder='Feedback Message....'></textarea>
        <button type='submit' className='bg-gray-500 text-gray-50 py-2 px-4 rounded-lg'>Submit</button>
      </form>
    </>
  )
}

export default GiveFeedBack
