import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation,titleAni} from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
    return ( 
        <ContactStyled exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAni}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAni}>
                        <Circle></Circle>
                        <h2>Send Us a Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAni}>
                        <Circle></Circle>
                        <h2>Send an mail</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAni}>
                        <Circle></Circle>
                        <h2>Twitter</h2>
                    </Social>
                </Hide>
                
                
            </div>
        </ContactStyled>
     );
}

const ContactStyled=styled(motion.div)`
color: white;
padding: 5rem 10rem;
min-height: 90vh;
@media (max-width: 1500px){
    padding: 2rem;
    font-size: 1rem;
    }
`;

const Title = styled.div`
margin-bottom: 4rem;
@media (max-width: 1500px){
    margin-top: 5rem; 
    }
`;

const Hide=styled.div`
overflow: hidden;
`;

const Circle=styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background: #353535;
`;

const Social=styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
`;
export default ContactUs;