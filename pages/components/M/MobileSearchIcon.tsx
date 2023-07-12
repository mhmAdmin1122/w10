import React, { useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'

const MobileSearchIcon = () => {
    const [serchBox, setSerchBox] = useState<any>(false);
    const handleSerchBox = () => {
        setSerchBox(!serchBox);
    };
    return (
        <>
            <div className="mobile-search-box">
                <form className='flex items-center relative' title='Search'>
                    <b onClick={handleSerchBox}><MdOutlineSearch className='bg-white h-8 w-8 p-2 rounded-full' /></b>
                    {serchBox && <div>
                        <button type="submit"><b><MdOutlineSearch className='bg-white h-8 w-8 p-2 rounded-full absolute -bottom-9 left-0 z-3' /></b></button>
                        <input type="search" placeholder='search' className='outline-none px-3 py-1 rounded-lg absolute -bottom-9 right-0' />
                    </div>}
                </form>
            </div>
        </>
    )
}

export default MobileSearchIcon
