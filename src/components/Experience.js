import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';


const Details = ({ position, company, companyLink, time, address,  work }) => {
    const ref= useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>

            <LiIcon reference={ref} />
            <motion.div
            initial={{ y:50 }}
            whileInView={{ y:0 }}
            transition={{ duration: 0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>




            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div  
                style={{ scaleY: scrollYProgress }}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                    position="Calibration Tech | Website Lead "
                    company="Hocker Incorporated"
                    companyLink="https://hockerinc.com"
                    time="2016 - 2023"
                    address="Houston, TX"
                    work="Worked as the lead overseeing inventory and products, as well as, updating website visuals and user experience. Meeting deadlines and providing customers with software and hardware support."
                    
                    
                    />
                    <Details 
                    position="Tech | Trainer | Customer Rep | Repair"
                    company="Customer Engineering Services (CES)"
                    companyLink="https://cesservice.com"
                    time="2014 - 2016"
                    address="United States"
                    work=" Worked traveling all over U.S. providing installation of software and hardware, training of employees, and sales in the photolabs of vendors such as Walmart & Walgreens.  Also provided over the phone, as well as, in person customer assistance."
                    
                    
                    />
                </ul>

            </div>

        </div>
    )
}

export default Experience