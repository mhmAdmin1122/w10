import React, { useState } from 'react'
import axios from 'axios'
import { MdOutlineCloudUpload } from 'react-icons/md'
import SuccessMessage from '../S/SuccessMessage'

const CoursesForm = () => {
    const [title, setTitle] = useState('')
    const [active, setActive] = useState('')
    const [aboutCard, setAboutCard] = useState('')
    const [cardPic, setCardPic] = useState('')
    const [category, setCategory] = useState('')
    const [mainTitlePost, setMainTitlePost] = useState('')
    const [mainImageOfPost, setMainImageOfPost] = useState('')
    const [mainDescriptionPost, setMainDescriptionPost] = useState('')
    const [subTitleFirst, setSubTitleFirst] = useState('')
    const [subTitleSecond, setSubTitleSecond] = useState('')
    const [subTitleThird, setSubTitleThird] = useState('')
    const [subTitleFourth, setSubTitleFourth] = useState('')
    const [subTitleFifth, setSubTitleFifth] = useState('')
    const [subDescriptionFirst, setSubDescriptionFirst] = useState('')
    const [subDescriptionSecond, setSubDescriptionSecond] = useState('')
    const [subDescriptionThird, setSubDescriptionThird] = useState('')
    const [subDescriptionFourth, setSubDescriptionFourth] = useState('')
    const [subDescriptionFifth, setSubDescriptionFifth] = useState('')
    const [docsPDF, setDocsPDF] = useState('')
    const [docsDOC, setDocsDOC] = useState('')
    const [docsRAR, setDocsRAR] = useState('')

    const onclickFunc = () => {
        setActive(true)
    }

    async function courses(ev) {
        ev.preventDefault()
        const data = {
            title,
            aboutCard,
            cardPic,
            category,
            mainTitlePost,
            mainImageOfPost,
            mainDescriptionPost,
            subTitleFirst,
            subTitleSecond,
            subTitleThird,
            subTitleFourth,
            subTitleFifth,
            subDescriptionFirst,
            subDescriptionSecond,
            subDescriptionThird,
            subDescriptionFourth,
            subDescriptionFifth,
            docsPDF,
            docsDOC,
            docsRAR
        }
        const response = await axios.post('/api/courses', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setTitle('')
            setAboutCard('')
            setCardPic('');
            setCategory('');
            setMainDescriptionPost('');
            setMainImageOfPost('');
            setMainTitlePost('');
            setSubTitleFirst('');
            setSubDescriptionFirst('');
            setSubTitleSecond('');
            setSubDescriptionSecond('');
            setSubTitleThird('');
            setSubDescriptionThird('');
            setSubTitleFourth('');
            setSubDescriptionFourth('');
            setSubTitleFifth('');
            setSubDescriptionFifth('');
            setDocsPDF('');
            setDocsDOC('');
            setDocsRAR('');
        }

    }

    return (
        <div>
            <form className='grid justify-center' onSubmit={courses}>

                {/* card info */}
                <div className="crdContent grid gap-2 justify-center">

                    <b className='text-2xl text-center'>Card Info</b>
                    <div className='flex'>

                        <div className='grid mr-7'>
                            <label htmlFor="CardTitle">Title Of Post</label>
                            <input type="text" id="CardTitle" value={title} onChange={ev => setTitle(ev.target.value)} placeholder='Post Title' />
                            <label htmlFor="Postdesc">About Post</label>
                            <textarea id="Postdesc" cols={30} rows={4} placeholder='About Post' value={aboutCard} onChange={ev => setAboutCard(ev.target.value)} />
                            <label htmlFor="CategoryPost">Post Category</label>
                            <input type="text" placeholder='Category' value={category} onChange={ev => setCategory(ev.target.value)} />
                        </div>

                        <div className='grid upload-post-course-pic relative'>
                            <label htmlFor="upload-pic">Post Image</label>
                            <input type="file" id="upload-pic" value={cardPic} onChange={ev => setCardPic(ev.target.value)} accept='image/*' />
                            <MdOutlineCloudUpload className='bg-gray-100 absolute cursor-pointer top-32 py-9 px-20 w-80 border-2 border-dashed border-gray-500' />
                        </div>

                    </div>

                </div>

                <hr className='mt-4' />
                <hr />

                {/* main-page content info */}
                <div className="mainContent grid justify-center">
                    <b className='text-xl text-center my-4'>Main Content</b>
                    <div className='flex'>
                        <div className='grid mr-8'>
                            <label htmlFor="mhead">main Heading</label>
                            <input type="text" id='mhead' placeholder='Main Heading' value={mainTitlePost} onChange={ev => setMainTitlePost(ev.target.value)} />
                            <label htmlFor="desc">Breif Descripion</label>
                            <textarea id="desc" cols={30} rows={4} placeholder='Description' value={mainDescriptionPost} onChange={ev => setMainDescriptionPost(ev.target.value)} />
                        </div>
                        <div className='grid upload-post-course-pic relative'>
                            <label htmlFor="upload-pic">Main Image</label>
                            <input type="file" id="upload-pic" accept='image/*' value={mainImageOfPost} onChange={ev => setMainImageOfPost(ev.target.value)} />
                            <MdOutlineCloudUpload className='bg-gray-100 absolute cursor-pointer top-10 py-9 px-20 w-80 border-2 border-dashed border-gray-500' />
                        </div>
                    </div>
                </div>
                <hr className='mt-6' />
                <hr />

                {/* sub-content info */}
                <div className="subContent grid justify-center">

                    <b className='text-lg text-center'>Sub Content</b>

                    <div className='flex flex-wrap gap-8 justify-center'>

                        <div className="sub sub1 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 1:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' value={subTitleFirst} onChange={ev => setSubTitleFirst(ev.target.value)} />
                            <label htmlFor="FirstSubDesc">Sub-Description 1:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' value={subDescriptionFirst} onChange={ev => setSubDescriptionFirst(ev.target.value)} />
                        </div>

                        <div className="sub sub2 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 2:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' value={subTitleSecond} onChange={ev => setSubTitleSecond(ev.target.value)} />
                            <label htmlFor="FirstSubDesc">Sub-Description 2:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' value={subDescriptionSecond} onChange={ev => setSubDescriptionSecond(ev.target.value)} />
                        </div>

                        <div className="sub sub3 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 3:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' value={subTitleThird} onChange={ev => setSubTitleThird(ev.target.value)} />
                            <label htmlFor="FirstSubDesc">Sub-Description 3:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' value={subDescriptionThird} onChange={ev => setSubDescriptionThird(ev.target.value)} />
                        </div>

                        <div className="sub sub4 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 4:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' value={subTitleFourth} onChange={ev => setSubTitleFourth(ev.target.value)} />
                            <label htmlFor="FirstSubDesc">Sub-Description 4:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' value={subDescriptionFourth} onChange={ev => setSubDescriptionFourth(ev.target.value)} />
                        </div>

                        <div className="sub sub5 grid">
                            <label htmlFor="FirstSubHead">Sub-Heading 5:</label>
                            <input type="text" id='FirstSubHead' placeholder='Heading' value={subTitleFifth} onChange={ev => setSubTitleFifth(ev.target.value)} />
                            <label htmlFor="FirstSubDesc">Sub-Description 5:</label>
                            <textarea rows={4} cols={40} id='FirstSubDesc' placeholder='Description' value={subDescriptionFifth} onChange={ev => setSubDescriptionFifth(ev.target.value)} />
                        </div>

                    </div>

                </div>
                <hr className='mt-6' />
                <hr />

                {/* document Uploader  */}
                <div className='block upload-Pdf-course-pic relative'>
                    <div className='grid text-center my-4'>
                        <label htmlFor="upload-pic text-center">Upload PDF / RAR Documents File:</label>
                    </div>
                    <div className="documentUploderBox realtive flex flex-wrap justify-center">
                        <div className="grid">
                            <label htmlFor="pdf">Document PDF</label>
                            <input type="file" id="pdf" accept='application/pdf' value={docsPDF} onChange={ev => setDocsPDF(ev.target.value)} />
                        </div>
                        <div className="grid">
                            <label htmlFor="docs">Document DOC{'(Word, Docs)'}</label>
                            <input type="file" id="docs" accept='.doc,.docx' value={docsDOC} onChange={ev => setDocsDOC(ev.target.value)} />
                        </div>
                        <div className="grid">
                            <label htmlFor="rar">Document WinRAR</label>
                            <input type="file" id="rar" accept='.zip,.rar,.7z,.gz' value={docsRAR} onChange={ev => setDocsRAR(ev.target.value)} />
                        </div>
                    </div>
                </div>
                <hr className='mt-6' />
                <hr />

                {/* Submit Btn */}
                <div className="submitBtn grid justify-center mt-6">
                    <button type='submit' className='bg-gray-600 text-gray-100 text-xl py-4 px-8 rounded-lg mt-4 font-bold cursor-pointer' onClick={onclickFunc}>Upload</button>
                </div>
                {/* Success Message */}
                {active && <SuccessMessage />}
            </form>

        </div>
    )
}

export default CoursesForm
