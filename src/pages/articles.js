import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RoutesArticle from '../../public/images/articles/RoutesArticle.png';
import ApiCallArticle from '../../public/images/articles/ApiCallArticle.png';
import CustomKeysArticle from '../../public/images/articles/CustomKeysArticle.png';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
            style={{ x:x, y:y }}
            initial={{ opacity: 0}}
            whileInView={{ opacity:1, transition: { duration: 0.2 }}}
            ref={imgRef} src={img} alt={title} className='w-96 z-10 h-auto hidden absolute rounded-lg' />
        </Link>
    )
};

const Article = ({ img, title, date, link }) => {
    return(
        <motion.li 
        initial={{ y:200 }}
        whileInView={{ y:0, transition:{ duration: 0.5, ease:"easeInOut" }}}
        viewport={{ once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4'>{date}</span>
            
        </motion.li>
    )
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return(
        <li className='col-span-1 relative w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank'
            className='w-full cursor-pointer inline-block overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{ scale: 1.05}}
                transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize font-bold text-2xl my-2 mt-4 hover:underline '>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time} minutes</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Jacob Hocker | Articles Page</title>
                <meta name='description' content="Articles written by Jacob Hocker" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World"  clasName='mb-16'/>

                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle 
                        img={RoutesArticle}
                        link="https://medium.com/@jacobhocker/creating-custom-randomized-routes-in-react-rails-app-109c7c9a5780"
                        title="Create Custom Randomized Routes in React/Rails App"
                        summary="Learn how to create randomized routes customized in Rails & React, for randomizing API route calls."
                        time="4"
                        />

                        <FeaturedArticle 
                        img={CustomKeysArticle}
                        link="https://medium.com/@jacobhocker/disabling-setting-up-custom-keys-in-ruby-activerecord-sinatra-phase-3-349253f04999"
                        title="Setting Up Custom Keys In Ruby And Sinatra"
                        summary="Learn how to create custom keys and disbale custom keys in Ruby using Active Record and Sinatra."
                        time="4"
                        
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article 
                        title="Making External API Calls Ruby/React"
                        date="March 10, 2022"
                        img={ApiCallArticle}
                        link="https://medium.com/@jacobhocker/making-an-external-api-call-using-backend-in-a-react-rails-app-89f3d657f8e1"
                        
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles