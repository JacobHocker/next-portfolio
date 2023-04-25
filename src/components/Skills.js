import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center 
        rounded-full font-semibold bg-dark text-light py-3
        px-6 absolute shadow-dark cursor-pointer dark:text-dark dark:bg-light'
            whileHover={{ scale:1.05 }}
            initial={{ x:0, y:0 }}
            whileInView={{ x:x, y:y, transition: {duration: 1.5} }}
            // if i only want it animated once
            // viewport: {{ once: true }}
            >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='flex items-center justify-center dark:bg-light dark:text-dark rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer'
                    whileHover={{ scale:1.05}}>
                    Full Stack
                </motion.div>

                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="JavaScript" x="-10vw" y="1vw" />
                <Skill name="Reactjs" x="-30vw" y="5vw" />
                <Skill name="Tailwind CSS" x="20vw" y="-11vw" />
                <Skill name="Sass(SCSS)" x="15vw" y="8vw" />
                <Skill name="JSON" x="5vw" y="-10vw" />
                <Skill name="Framer Motion" x="5vw" y="-15vw" />

            </div>
        </>
    )
}

export default Skills