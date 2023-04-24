import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/editedwhiteNoBG.png";
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

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
            <main className='flex w-full flex-col items center justify-center'>

                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16"/>

                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I'm Jacob, a full stack web developer, UI/UX designer, and technical support specialist with a passion for creating beautiful, functional, 
                                and user-centered digital experiences.  I am always looking for new and innovative ways to bring solutions to my clients issues, and bring their vision to life.
                            </p>
                            <p className='my-4 font-medium'>
                                As a self-proclaimed nerd, I have an insatiable thirst for knowledge and a passion for learning about new technologies. My love for gaming has taught me the value of teamwork, strategic thinking, and problem-solving, skills that are highly transferable to any work environment. With a strong foundation in technology and a genuine love for learning, I am committed to making a meaningful contribution to any organization that values innovation and continuous growth. 
                            </p>
                        </div>



                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />
                            <Image src={profilePic} alt="Jacob Hocker" className="w-full h-auto rounded-2xl" />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between'>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                            </div>

                        </div>
                    </div>
                </Layout>
                
            </main>
        </>
    )
}

export default about;