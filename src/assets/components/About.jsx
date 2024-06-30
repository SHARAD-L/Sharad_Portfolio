import React from 'react';
import { Tilt } from 'react-tilt'; 
import { motion } from 'framer-motion';

import { styles } from '../../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.3)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='object-contain w-16 h-16'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
);

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p variants={fadeIn("","","0.1",1)}
        className="mt-4 justify-center align-middle text-secondary text-justify text-[17px] max-w-3xl leading-[30px]">
        Highly motivated problem solver with an innate 
        ability of thinking logically and keen about frontend 
        web development. I have a strong background in JavaScript and expertise
        in frameworks such as React.js, Node.js, Three.js and 
        Bootstrap.js. Have done several projects which are 
        efficient and user friendly.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-10 py-5 mt-20 align-middle">
            {services.map((service, index) =>(
                <ServiceCard key={service.title} index={index} {...service}/>
            ))}
        </div>
    </>
  );
};

export default SectionWrapper(About, "about");
