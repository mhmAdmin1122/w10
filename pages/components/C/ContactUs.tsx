import React from 'react'

const ContactUs = () => {
    return (
        <form className='grid justify-center contact-form'>
            <h1 className='font-bold text-xl flex flex-wrap items-center text-center justify-center mt-6'>Conatct Us</h1>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder='First Name' id='firstname' />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder='Last Name' id='lastname' />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder='example@xyz.com'/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={30} rows={10} placeholder='Write Your Message Here'></textarea>
            <button className='bg-gray-500 text-gray-50 font-bold px-4 py-2 my-2 rounded-lg cursor-pointer' type='submit'>Submit Request</button>
        </form>
    )
}

export default ContactUs
