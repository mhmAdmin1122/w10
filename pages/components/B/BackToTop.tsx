import React, { useState, useEffect } from 'react';
// import styles from './BackToTopButton.module.css'; // You can create a CSS module for styling the button


const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Function to check if the user has scrolled down enough to show the button
        const handleScroll = () => {
            // const scrollTop = window.pageYOffset;
            const scrollTop = window.scrollY;
            const triggerScroll = 100; // Adjust this value to change when the button appears
            setShowButton(scrollTop > triggerScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="fixed z-40 bottom-5 text-2xl font-extrabold right-5 py-2 px-4 shadow-md shadow-red-500 items-center rounded-full border-none bg-red-700 text-gray-50 cursor-pointer hidden"
            onClick={scrollToTop}
            style={{ display: showButton ? 'block' : 'none' }}
        >
            ^
        </button>
    );
};
export default BackToTop
