import React, { useEffect, useState } from 'react'

const SuccessMessage = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    

    function clickhandle() {
        setVisible(false)
    }
    return (
        <>
            {visible && <div className="grid justify-center justify-items-center">
                <div className='successMessage bg-green-600 text-gray-50 font-medium px-12 text-center py-4 my-4 cursor-context-menu rounded-md relative'>
                    <b>Form Submited Succesfully</b>
                    <button className='bg-red-600 text-sm text-gray-50 font-bold px-2 cursor-pointer absolute top-1 right-2 rounded-full w-6 h-6 text-center' onClick={clickhandle}>X</button>
                </div>
            </div>
            }
        </>
    )
}

export default SuccessMessage;