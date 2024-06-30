import React from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { styles } from '../../style';
import { projects } from '../../assets/constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { github } from '..';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="card blue-grey-gradient p-5 rounded-2xl w-full sm:w-[330px] md:w-[340px] lg:w-[340px] h-[460px] min-h-[460px]"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="object-fill w-full h-[180px] rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-left font-bold text-[24px]">{name}</h3>
          <p className="text-justify mt-2 text-secondary text-[14px] max-h-[100px] overflow-hidden overflow-ellipsis">{description}</p>
        </div>
        <div className='flex flex-wrap gap-3 mt-4 justify-left'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="flex w-full text-justify justify-left">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are some of the key projects I have developed using web3 technologies and ReactJS frameworks, which you can view on GitHub and star if you find them interesting. These projects utilize a range of technologies, including HTML, CSS, JavaScript, ReactJS, Bootstrap 5, RRT algorithm, YOLO-V3, and the YouTube API. They showcase my proficiency in modern web development and advanced algorithm integration. :)
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-5 align-middle sm:mt-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");

