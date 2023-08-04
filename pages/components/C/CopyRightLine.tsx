import React from 'react'
import { MdOutlineCopyright } from 'react-icons/md'

const CopyRightLine = () => {
    return (
        <div className='w-full h-auto gap-2 flex flex-wrap bg-purple-400 text-xl py-3 font-extrabold items-center justify-center content-center text-center'>
            <b><MdOutlineCopyright /></b>
            <b>All Copyright Reserved By World 10 Tech</b>
        </div>
    )
}

export default CopyRightLine
