import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';


const Details = ({ type, time, place, info }) => {
    const ref= useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>

            <LiIcon reference={ref} />
            <motion.div
            initial={{ y:50 }}
            whileInView={{ y:0 }}
            transition={{ duration: 0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>




            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div  
                style={{ scaleY: scrollYProgress }}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                    type="Full Stack Software Engineering"
                    place="Flatiron School"
                    time="2021 - 2022"
                    info="Completed the full stack software engineering program, specializing in React, Ruby on Rails, and OOP."
                    />
                    <Details 
                    type="Bachelors Degree in Audio Engineering"
                    place="Lonestar Community College"
                    time="2012 - 2014"
                    info="Completed coursework towards a Bachelors Degree in Audio Engineering for music production, as well as, music business."
                    />
                </ul>

            </div>

        </div>
    )
}

export default Education