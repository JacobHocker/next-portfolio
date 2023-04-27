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
import TransitionEffect from '@/components/TransitionEffect';
import HamburgerArticle from '../../public/images/articles/HamburgerArticle.jpg';
import ToTop from '@/components/ToTop';

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
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200) 50vw, 50vw'
            ref={imgRef} src={img} alt={title} className='w-96 z-10 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
};

const Article = ({ img, title, date, link }) => {
    return(
        <motion.li 
        initial={{ y:100 }}
        whileInView={{ y:0, transition:{ duration: 0.5, ease:"easeInOut", once: true }}}
        
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light
        border-r-4 border-b-4 sm:flex-col
        
        '>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:text-start sm:pl-0 xs:text-sm'>{date}</span>
            
        </motion.li>
    )
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return(
        <li className='col-span-1 relative w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
            <Link href={link} target='_blank'
            className='w-full cursor-pointer inline-block overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{ scale: 1.05}}
                transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize font-bold text-2xl my-2 mt-4 hover:underline dark:text-light xs:text-lg '>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time} minutes</span>
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
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World"  className='mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl md:grid-cols-1 md:gap-y-16'/>

                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle 
                        img={HamburgerArticle}
                        link="https://medium.com/@jacobhocker/creating-an-animated-hamburger-menu-in-nextjs-tailwind-css-9e332d428811"
                        title="Create an animated hamburger menu in NextJS & Tailwind CSS"
                        summary="Learn how to create an animated hamburger menu in React and Tailwind that is completely customizable."
                        time="5"
                        />
                        <FeaturedArticle 
                        img={RoutesArticle}
                        link="https://medium.com/@jacobhocker/creating-custom-randomized-routes-in-react-rails-app-109c7c9a5780"
                        title="Create Custom Randomized Routes in React/Rails App"
                        summary="Learn how to create randomized routes customized in Rails & React, for randomizing API route calls."
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
                        <Article 
                        title="Setting Up Custom Keys In Ruby And Sinatra"
                        date="November 7, 2021"
                        img={CustomKeysArticle}
                        link="https://medium.com/@jacobhocker/disabling-setting-up-custom-keys-in-ruby-activerecord-sinatra-phase-3-349253f04999"
                        
                        />
                    </ul>

                    <ToTop />
                </Layout>
            </main>
        </>
    )
}

export default articles