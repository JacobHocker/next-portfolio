import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center 
        rounded-full font-semibold bg-dark text-light py-3
        px-6 absolute shadow-dark cursor-pointer dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        '


            whileHover={{ scale:1.05 }}
            initial={{ x:0, y:0 }}
            whileInView={{ x:x, y:y, transition: {duration: 1.5} }}
            
            viewport={{ once: true }}
            >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            {/* FRONT END SKILLS */}
            <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl sm:text-4xl xs:text-3xl md:mt-32'>Front End Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            '>
                <motion.div className='flex items-center justify-center dark:bg-light dark:text-dark rounded-full font-semibold
                bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer lg:p-6 md:p-4 xs:p-2'
                    whileHover={{ scale:1.05}}>
                    Web
                </motion.div>

                <Skill name="CSS" x="15vw" y="20vw" />
                <Skill name="HTML" x="-25vw" y="0vw" />
                <Skill name="JavaScript" x="0vw" y="14vw" />
                <Skill name="ReactJS" x="-23vw" y="-15vw" />
                <Skill name="Tailwind" x="20vw" y="-11vw" />
                <Skill name="Sass" x="-15vw" y="8vw" />
                <Skill name="Bootstrap" x="27vw" y="12vw" />
                <Skill name="NextJS" x="30vw" y="0vw" />
                <Skill name="Agile" x="0vw" y="-13vw" />
                <Skill name="Framer Motion" x="0vw" y="-20vw" />
                

            </div>
            </>

            {/* BACKEND SKILLS */}
            <>
                <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl sm:text-4xl xs:text-3xl md:mt-32'>Back End Skills</h2>
                <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
                lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                '>
                    <motion.div className='flex items-center justify-center dark:bg-light dark:text-dark rounded-full font-semibold
                    bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer lg:p-6 md:p-4 xs:p-2'
                        whileHover={{ scale:1.05}}>
                        API
                    </motion.div>

                    <Skill name="OOP" x="3vw" y="20vw" />
                    <Skill name="Ruby" x="-15vw" y="-17vw" />
                    <Skill name="NodeJS" x="25vw" y="0vw" />
                    <Skill name="ExpressJS" x="-28vw" y="12vw" />
                    <Skill name="MySQL" x="23vw" y="-13vw" />
                    <Skill name="Postgres" x="15vw" y="15vw" />
                    <Skill name="JSON" x="-25vw" y="0vw" />
                    <Skill name="Ruby on Rails" x="5vw" y="-24vw" />
                    <Skill name="REST" x="-30vw" y="-10vw" />
                    
                </div>
            </>
        </>
    )
}

export default Skills