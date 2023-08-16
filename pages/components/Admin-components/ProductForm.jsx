import React, { useState } from 'react'
import SuccessMessage from '../S/SuccessMessage'
import axios from 'axios'

const ProductForm = () => {

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productPicSlide1, setProductPicSlide1] = useState('')
    const [productPicSlide2, setProductPicSlide2] = useState('')
    const [productPicSlide3, setProductPicSlide3] = useState('')
    const [productPicSlide4, setProductPicSlide4] = useState('')
    const [productPicSlide5, setProductPicSlide5] = useState('')
    const [productColor, setProductColor] = useState('')
    const [productBrand, setProductBrand] = useState('')
    const [productSize, setProductSize] = useState('')
    const [productConectTech, setProductConectTech] = useState('')
    const [productCompatibleDevice, setProductCompatibleDevice] = useState('')
    const [productDepartment, setProductDepartment] = useState('')
    const [productMaterial, setProductMaterial] = useState('')
    const [productLanguage, setProductLanguage] = useState('')
    const [productWeight, setProductWeight] = useState('')
    const [active, setActive] = useState(false)

    const onclickFunc = () => {
        setActive(true)
    }

    async function product(ev) {
        ev.preventDefault()

        const data = {
            productName,
            productDescription,
            productPrice,
            productCategory,
            productImage,
            productPicSlide1,
            productPicSlide2,
            productPicSlide3,
            productPicSlide4,
            productPicSlide5,
            productBrand,
            productColor,
            productSize,
            productCompatibleDevice,
            productConectTech,
            productDepartment,
            productLanguage,
            productMaterial,
            productWeight
        }

        const response = await axios.post('/api/product', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setProductName('')
            setProductPrice('');
            setProductDescription('')
            setProductCategory('')
            setProductImage('')
            setProductPicSlide1('')
            setProductPicSlide2('')
            setProductPicSlide3('')
            setProductPicSlide4('')
            setProductPicSlide5('')
            setProductBrand('')
            setProductColor('')
            setProductSize('')
            setProductCompatibleDevice('')
            setProductConectTech('')
            setProductDepartment('')
            setProductLanguage('')
            setProductMaterial('')
            setProductWeight('')
        }

    }

    return (
        <form className='grid justify-center' onSubmit={product}>

            <b className='text-center text-2xl font-bold cursor-context-menu'>Product Uploader</b>

            <div className="cardProductInfo grid justify-center">
                <label htmlFor="title">Product Title</label>
                <input type="text" id='title' placeholder='Product Name' value={productName} onChange={ev => setProductName(ev.target.value)} />
                <label htmlFor="Price">Price</label>
                <input type="number" id="Price" placeholder='$123...' value={productPrice} onChange={ev => setProductPrice(ev.target.value)} />
                <label htmlFor="desc-prd-card">Description</label>
                <textarea id="desc-prd-card" cols={30} rows={4} placeholder='Description' value={productDescription} onChange={ev => setProductDescription(ev.target.value)} />
                <label htmlFor="categ">Category</label>
                <select id="categ" value={productCategory} onChange={ev => setProductCategory(ev.target.value)} >
                    <option vlaue="category1">Tech</option>
                    <option vlaue="category2">Home Based</option>
                    <option vlaue="category3">Casmatics</option>
                    <option vlaue="category4">Sports</option>
                    <option vlaue="category5">Educational</option>
                </select>
                <label htmlFor="Card-pic">Images</label>
                <input type="file" id="Card-pic" accept='images/*' value={productImage} onChange={ev => setProductImage(ev.target.value)} />
            </div>
            <hr className='mt-4' />
            <hr />
            <hr />

            <div className="ProductPostDetail">

                <div className="sliderDetails flex flex-wrap gap-8 px-4 py-8">

                    <div className="det det1 grid">
                        <label htmlFor="pic-1">Slider Pic 1: </label>
                        <input type="file" id="pic-1" value={productPicSlide1} onChange={ev => setProductPicSlide1(ev.target.value)} />
                    </div>

                    <div className="det det2 grid">
                        <label htmlFor="pic-2">Slider Pic 2: </label>
                        <input type="file" id="pic-2" value={productPicSlide2} onChange={ev => setProductPicSlide2(ev.target.value)} />
                    </div>

                    <div className="det det3 grid">
                        <label htmlFor="pic-3">Slider Pic 3: </label>
                        <input type="file" id="pic-3" value={productPicSlide3} onChange={ev => setProductPicSlide3(ev.target.value)} />
                    </div>

                    <div className="det det4 grid">
                        <label htmlFor="pic-4">Slider Pic 4: </label>
                        <input type="file" id="pic-4" value={productPicSlide4} onChange={ev => setProductPicSlide4(ev.target.value)} />
                    </div>

                    <div className="det det5 grid">
                        <label htmlFor="pic-5">Slider Pic 5: </label>
                        <input type="file" id="pic-5" value={productPicSlide5} onChange={ev => setProductPicSlide5(ev.target.value)} />
                    </div>

                </div>

            </div>
            <hr className='mt-4' />
            <hr />
            <hr />

            <div className="aboutMoreProduct grid justify-center">
                <label htmlFor="">Product Color <b className='text-red-600'>*</b></label>
                <input type="text" value={productColor} onChange={ev => setProductColor(ev.target.value)} />
                <label htmlFor="">Product Brand <b className='text-red-600'>*</b></label>
                <input type="text" value={productBrand} onChange={ev => setProductBrand(ev.target.value)} />
                {/* for Tech */}
                <label htmlFor="">Product Size <b className='text-red-600'>*</b></label>
                <input type="text" value={productSize} onChange={ev => setProductSize(ev.target.value)} />
                <label htmlFor="">Connectivity Technology <b className='text-sm text-gray-400'>{'(Wirless, Wired, etc...) optional'}</b></label>
                <input type="text" value={productConectTech} onChange={ev => setProductConectTech(ev.target.value)} />
                <label htmlFor="">Compatible Devices <b className='text-sm text-gray-400'>{'(PC, Laptop etc...) optional'}</b></label>
                <input type="text" value={productCompatibleDevice} onChange={ev => setProductCompatibleDevice(ev.target.value)} />
                {/* Home BASED */}
                <label htmlFor="">Department <b className='text-sm text-gray-400'>{'(Creams, Makeup, etc....) optional'}</b></label>
                <input type="text" value={productDepartment} onChange={ev => setProductDepartment(ev.target.value)} />
                {/* Casmatics -None */}
                {/* sport */}
                <label htmlFor="">Material <b className='text-sm text-gray-400'>{'(Bat, Ball, etc) optional'}</b></label>
                <input type="text" value={productMaterial} onChange={ev => setProductMaterial(ev.target.value)} />
                {/* Educational */}
                <label htmlFor="">Product Language <b className='text-sm text-gray-400'>{'(Books, Story Notes) optional'}</b></label>
                <input type="text" value={productLanguage} onChange={ev => setProductLanguage(ev.target.value)} />
                <label htmlFor="">Item Weight <b className='text-sm text-gray-400'>{'(Books, Story Notes) optional'}</b></label>
                <input type="text" value={productWeight} onChange={ev => setProductWeight(ev.target.value)} />
            </div>
            <hr className='mt-4' />
            <hr />
            <hr />

            <div className="sumitBtn grid justify-center mt-8">
                <button type='submit' className='bg-gray-600 text-white px-6 py-2 rounded-md cursor-pointer' onClick={onclickFunc}>
                    Upload
                </button>
            </div>

            {
                active && <SuccessMessage />
            }

        </form>
    )
}

export default ProductForm;
