import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAni,fade,photo} from '../animation';
import {Link} from 'react-router-dom';

const AboutSection = () => {
    return ( 
        <About>
            <Description>
                <div className="title">
                    <Hide><motion.h2 variants={titleAni}>We work to make</motion.h2></Hide>
                    <Hide><motion.h2 variants={titleAni}>your <span>dreams</span></motion.h2></Hide>
                    <Hide><motion.h2 variants={titleAni}>come true.</motion.h2></Hide>
                </div>
            <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
            <Link to="/contact"><motion.button variants={fade}>Contact us</motion.button></Link>
            </Description>
            <Image>
                <motion.img variants={photo} src={home1} alt="guy with camera"/>
            </Image>
        </About>
     );
}

 
export default AboutSection;