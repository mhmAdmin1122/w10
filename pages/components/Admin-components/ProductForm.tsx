import React from 'react'

const ProductForm = () => {
    return (
        <form className='grid justify-center'>
            <b className='text-center text-2xl font-bold cursor-context-menu'>Product Uploader</b>
            <div className="cardProductInfo grid">
                <label htmlFor="title">Product Title</label>
                <input type="text" id='title' placeholder='Product Name' />
                <label htmlFor="Price">Price</label>
                <input type="number" id="Price" placeholder='$123...' />
                <label htmlFor="desc-prd-card">Description</label>
                <textarea id="desc-prd-card" cols={30} rows={4} placeholder='Description'></textarea>
                <label htmlFor="categ">Category</label>
                <select id="categ">
                    <option>Tech</option>
                    <option>Home Based</option>
                    <option>Casmatics</option>
                    <option>Sports</option>
                    <option>Educational</option>
                </select>
                <label htmlFor="Card-pic">Images</label>
                <input type="file" id="Card-pic" accept='images/*' />
            </div>
            <hr className='mt-4' />
            <hr />
            <hr />

            <div className="ProductPostDetail">
                <div className="sliderDetails flex flex-wrap gap-8 px-4 py-8">
                    <div className="det det1 grid">
                        <label htmlFor="pic-1">Slider Pic 1: </label>
                        <input type="file" id="pic-1" />
                    </div>
                    <div className="det det2 grid">
                        <label htmlFor="pic-2">Slider Pic 2: </label>
                        <input type="file" id="pic-2" />
                    </div>
                    <div className="det det3 grid">
                        <label htmlFor="pic-3">Slider Pic 3: </label>
                        <input type="file" id="pic-3" />
                    </div>
                    <div className="det det4 grid">
                        <label htmlFor="pic-4">Slider Pic 4: </label>
                        <input type="file" id="pic-4" />
                    </div>
                    <div className="det det5 grid">
                        <label htmlFor="pic-5">Slider Pic 5: </label>
                        <input type="file" id="pic-5" />
                    </div>
                </div>
                <div className="AboutProduct"></div>
            </div>
            <hr className='mt-4' />
            <hr />
            <hr />

            <div className="sumitBtn grid justify-center mt-8">
                <button type='submit' className='bg-gray-600 text-white px-6 py-2 rounded-md cursor-pointer'>Upload</button>
            </div>
        </form>
    )
}

export default ProductForm
