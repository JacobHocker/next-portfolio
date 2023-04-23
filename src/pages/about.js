import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

function about() {
    return (
        <>
            <Head>
                <title>Jacob Hocker | About Page</title>
                <meta name='description' content="Jacob Hocker's about page" />
            </Head>
            <main className='flex w-full flex-col items center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" />
                    <div className='grid w-full grid-col-8 gap-16'>
                        <div>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        </div>
                    </div>
                </Layout>
                
            </main>
        </>
    )
}

export default about