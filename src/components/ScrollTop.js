import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollTop = () => {
    const {pathname}=useLocation();
    useEffect(()=>{
        setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0
            })  
        }, 1);
       
    },[pathname])
    
    return null;
};
 
export default ScrollTop;

