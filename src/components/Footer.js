import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='w-full border-t-2 border-solid border-dark sm:text-base
        font-medium text-lg dark:text-light dark:border-light'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Built With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> By&nbsp; <Link href="/" className='underline
                    underline-offseet-2
                    '> Jacob Hocker</Link>
                </div>
                
                <Link href="/">Say hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer