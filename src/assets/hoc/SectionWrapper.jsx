import { motion } from 'framer-motion';
import { staggerContainer } from "../utils/motion";
import { Component } from "react";
import { styles } from '../../style';

const SectionWrapper = (Component, idName) =>
function HOC(){
    return(
        <motion.section
            variants = {staggerContainer()}
            initial = "hidden"
            whileInView = "show"
            viewport = {{once:true, amount:0.25}}
            className = {`${styles.padding} relative z-0 mx-auto max-w-8xl`}>

            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    );
};

export default SectionWrapper;