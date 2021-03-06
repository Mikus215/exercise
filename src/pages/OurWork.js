import React from 'react';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageAnimation,photo,fade,lineAn} from '../animation';
import {useScroll} from '../components/useScroll';

const OurWork = () => {
    const [element,controls]=useScroll();
    const [element2,controls2]=useScroll();
    return ( 
        <Work exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <Movie initial="show">
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAn} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                <motion.img variants={photo} src={athlete} alt=""/>
                    </Hide>
                </Link>
            </Movie>
            <Movie initial='hidden' animate={controls} ref={element} variants={fade}>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAn} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                <motion.img variants={fade} src={theracer} alt=""/>
                    </Hide>
                </Link>
            </Movie>
            <Movie initial='hidden' animate={controls2} ref={element2} variants={fade}>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAn} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                <motion.img variants={fade} src={goodtimes} alt=""/>
                    </Hide>
                </Link>
            </Movie>
        </Work>
     );
}

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
@media (max-width: 1200px){
     padding: 2rem 2rem;  
    }
h2{
    padding: 1rem 0rem;
    color: white;
}
`;
const Movie=styled(motion.div)`
padding-bottom: 10rem;
.line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;
const Hide=styled.div`
overflow: hidden;
`;
 
export default OurWork;