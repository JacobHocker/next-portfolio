import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/LRsmile-edited-NoBG.png";
import {  useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import ToTop from '@/components/ToTop';


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    
    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
};



function about() {
    return (
        <>
            <Head>
                <title>Jacob Hocker | About Page</title>
                <meta name='description' content="Jacob Hocker's about page" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items center justify-center dark:text-light'>

                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16 !text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "/>

                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I'm Jacob, a full stack web developer, UI/UX designer, and technical support specialist with a passion for creating beautiful, functional, 
                                and user-centered digital experiences.  I am always looking for new and innovative ways to bring solutions to my clients issues, and bring their vision to life.
                            </p>
                            <p className='my-4 font-medium'>
                                As a self-proclaimed nerd, I have an insatiable thirst for knowledge and a passion for learning about new technologies. My love for gaming has taught me the value of teamwork, strategic thinking, and problem-solving, skills that are highly transferable to any work environment. With a strong foundation in technology and a genuine love for learning, I am committed to making a meaningful contribution to any organization that values innovation and continuous growth. 
                            </p>
                        </div>



                        <div className='col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid
                        border-dark bg-light dark:bg-dark dark:border-light p-8 md:order-1 md:col-span-8'>

                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="Jacob Hocker" className="w-full h-auto rounded-2xl" 
                            priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200) 50vw, 50vw'
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>

                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />

                    <ToTop />

                    
                </Layout>
                
            </main>
        </>
    )
}

export default about;