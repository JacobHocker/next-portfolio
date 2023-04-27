import React from 'react'
import { ArrowIcon } from './Icons';


const isBrowser = () => typeof window !== 'undefined';

const scrollToTop = () => {
    if(!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth'})
}
const ToTop = () => {
    return (
        <button onClick={scrollToTop} className='w-12 h-12 p-2 rounded-full 
        fixed bottom-12 right-2 xs:w-10 xs:h-10


        border border-dark/25 bg-dark/25
        dark:bg-light/25 dark:border-light/25
        dark:hover:bg-light dark:hover:border-light
        hover:border-dark hover:bg-dark transition-opacity duration-3000 ease-in-out'>
            <ArrowIcon className="fill-primaryDark/25 hover:fill-primaryDark 
            dark:fill-primary/25 dark:hover:fill-primary
            transition-opacity duration-300 ease-in-out"/>
        </button>
    )
}

export default ToTop