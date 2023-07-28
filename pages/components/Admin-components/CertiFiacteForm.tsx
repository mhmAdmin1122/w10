import React from 'react'

const CertiFiacteForm = () => {
    return (
        <form className='grid certi-builder justify-center'>
            <b className='text-center text-2xl font-bold my-6'>Certificate Card Builder</b>
            <label htmlFor="cert-title">Certifiacte Course Name</label>
            <input type="text" id="cert-title" placeholder='Title' />
            <label htmlFor="crse-price">Course Price</label>
            <input type="number" id='crse-price' placeholder='$123...'/>
            <label htmlFor="Course-cardDesc">Short Description</label>
            <textarea name="" id="Course-cardDesc" cols={30} rows={4} placeholder='Short Description'></textarea>
            <label htmlFor="cardPic">Image</label>
            <input type="file" id="crd-pic" accept='image/*' />
            <label htmlFor="More-about">Description</label>
            <textarea id="More-about" cols={30} rows={4} placeholder='Description'></textarea>
            <div className="submitBtn grid justify-center mt-6">
                <button type='submit' className='bg-gray-600 text-gray-100 text-xl py-4 px-8 rounded-lg mt-4 font-bold cursor-pointer'>Upload</button>
            </div>
        </form>
    )
}

export default CertiFiacteForm;
