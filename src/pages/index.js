import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import profilePic from "../../public/images/profile/fullbodyeditedNoBGLG.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import tech from '../../public/images/svgs/technology.svg';
import TransitionEffect from '@/components/TransitionEffect';


export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Hocker</title>
        <meta name="description" content="Jacob Hocker's portfolio." />
        
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>

        <Layout className='pt-0 md:pt-16 sm:pt-8'>

          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Jacob Hocker" className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200) 50vw, 50vw'
              />

            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              
              <AnimatedText text="Bringing Ideas To Life Through Code & Design." className='!text-6xl !text-left
              xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              ' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a passionate software developer & tech support specialist, I am commited to turning ideas into a reality. 
                Explore my latest projects and articles. See my specialties in React, development/design,and technical support.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target={"_blank"}
                download={true}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 sm:px-2 md:text-base
                '>
                  Resume <LinkArrow className={" w-6 ml-1"}/>
                  
                  </Link>
                <Link href="mailto:jacobdouglas06@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
          
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={tech} alt='homeSVG' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
