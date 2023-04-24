import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import EntSpotThumb from '../../public/images/projects/EntSpotThumbnail.jpg';
import QuizChampThumb from '../../public/images/projects/QuizChampThumbnail.jpg';
import PortfolioThumb from '../../public/images/projects/PortfolioThumbnail.png';
import Filler from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {


    return(
        <article className='w-full p-12 flex items-center justify-between rounded-br-2xl rounded-3xl 
        border border-solid border-dark bg-light  shadow-2xl relative'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        {" "}
                        <GithubIcon />
                        {" "}
                    </Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
            

        </article>
    )
};

const Project = ({ type, title, img, link, github }) => {

    return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative '>
        
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2rem] bg-dark rounded-br-3xl' />
        <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>

                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>

                <div className='mt-2 w-full  flex items-center justify-between'>
                    <Link href={link} target='_blank'
                    className='text-lg font-semibold underline'
                    >
                        Visit 
                    </Link>
                    <Link href={github} target='_blank' className='w-8'>
                        {" "}
                        <GithubIcon />
                        {" "}
                    </Link>
                    
                </div>
            </div>
    </article>
    )
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Jacob Hocker | Projects Page</title>
                <meta name='description' content="Projects by Jacob Hocker" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16' >
                    <AnimatedText text="Effort Never Fails!" clasName='mb-16' />
                

            <div className='grid grid-cols-12 gap-24 gap-y-32'>

                <div className='col-span-12 '>
                    <FeaturedProject 
                    type="Featured Project"
                    title="EntSpot"
                    summary="An IMDB clone site using the TMDB API. Made with NextJS & Tailwind CSS. Find movies, people, and shows in this expansive application for all your entertainment knowledge needs!"
                    link="https://ent-spot.vercel.app/"
                    github="https://github.com/JacobHocker/ent-spot"
                    img={EntSpotThumb}
                    
                    
                    />
                </div>

                <div className='col-span-6'>
                        <Project 
                        type="Featured Project"
                        title="Jacob Hocker Portfolio"
                        link="/"
                        github="https://github.com/JacobHocker/next-portfolio"
                        img={PortfolioThumb}
                        
                        
                        />
                </div>

                <div className='col-span-6'>
                    <Project 
                        type="Featured Project"
                        title="Crypto Screener"
                        link="/"
                        github="/"
                        img={Filler}
                    />
                </div>

                <div className='col-span-12 '>
                    <FeaturedProject 
                        type="Featured Project"
                        title="QuizChamp"
                        summary="A quiz website built with ReactJS, ExpressJS, NodeJS, CSS, MySQL, and Sequelize. Take quizzes and try to get higher scores using the database and API I built where your highest scores will get saved to the leaderboard!"
                        link="https://quiz-champ.onrender.com/"
                        github="https://github.com/JacobHocker/quiz-champ-fe"
                        img={QuizChampThumb}
                        
                        
                        />
                </div>

                <div className='col-span-6'>
                    <Project 
                        type="Featured Project"
                        title="Crypto Screener"
                        link="/"
                        github="/"
                        img={Filler}
                    />
                </div>

                <div className='col-span-6'>
                    <Project 
                        type="Featured Project"
                        title="Crypto Screener"
                        link="/"
                        github="/"
                        img={Filler}
                    />
                </div>

            </div>

            </Layout>
            </main>
        </>
    )
}

export default projects