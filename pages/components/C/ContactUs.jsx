import axios from 'axios';
import React, { useState } from 'react'
import SuccessMessage from '../S/SuccessMessage';
import { on } from 'stream';

const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [active, setActive] = useState(false);

    const onclickFunc = () => {
        setActive(true)
    }

    async function contactUs(ev) {
        ev.preventDefault()
        const data = { firstName, lastName, email, phone, message }
        const response = await axios.post('/api/contactUs', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            alert('Form submitted successfully!');
            setFirstName('')
            setLastName('')
            setEmail('');
            setPhone('')
            setMessage('')
        }

    }

    return (
        <>
            <form className='grid justify-center contact-form' onSubmit={contactUs}>
                <h1 className='font-bold text-xl flex flex-wrap items-center text-center justify-center mt-6'>Conatct Us</h1>
                <label htmlFor="firstname">First Name</label>
                <input type="text" value={firstName} placeholder='First Name' id='firstname' onChange={ev => setFirstName(ev.target.value)} />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" value={lastName} placeholder='Last Name' id='lastname' onChange={ev => setLastName(ev.target.value)} />
                <label htmlFor="email">E-mail</label>
                <input type="email" value={email} name="email" id="email" placeholder='example@xyz.com' onChange={ev => setEmail(ev.target.value)} />
                <label htmlFor="phone">Phone No: </label>
                <input type="tel" value={phone} name="phone" id="phone" onChange={ev => setPhone(ev.target.value)} placeholder='(+1) 000 0000 000' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={message} cols={30} rows={10} placeholder='Write Your Message Here' onChange={ev => setMessage(ev.target.value)}></textarea>
                <button className='bg-gray-500 text-gray-50 font-bold px-4 py-2 my-2 rounded-lg cursor-pointer' onClick={onclickFunc} type='submit'>Submit Request</button>
            </form>
            {active ? 
                <SuccessMessage />
             : ""}
        </>
    )
}

export default ContactUs
