import React from 'react'

const ProblemsForm = () => {
  return (
    <>
      <form className='ProblemsForm grid justify-items-center w-full'>
        <label htmlFor="problems">Problems</label>
        <textarea name="problems" id="problems" cols={30} rows={10}></textarea>
        <button type='submit' className='bg-gray-500 text-gray-50 py-2 px-4 rounded-lg'>Submit</button>
      </form>
    </>
  )
}

export default ProblemsForm
