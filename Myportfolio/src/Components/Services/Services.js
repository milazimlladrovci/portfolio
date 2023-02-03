import React from 'react'
import Card from '../Card/Card';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './CV-MLL.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Services = () => {

    const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <spane> Dedicated and efficient frontend
                developer. 
        <br/>
        Eager to learn new things,
                punctual in deadlines.
                <br/>
                and always
                ready to contribute to achieve the
                highest<br/>
                 level of quality.
        </spane>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "ABF1FF94" }}>
        </div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div 
            initial={{left: '14rem'}}
            whileInView = {{left: '17rem'}}
            transition={transition}
            
            
            style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Git'}
                detail = {" Github"}
                />
            </motion.div>
        {/* second card */}
        <motion.div
        initial={{left: '-4rem'}}
        whileInView = {{left: '-5rem'}}
        transition={transition}
        
        
        style={{top: "12rem", left: "-4rem" }}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML5, CSS3, Bootstrap, JavaScript, React JS"}
            />
        </motion.div>
        {/* 3rd */}
        <motion.div
        initial={{left: '14rem'}}
        whileInView = {{left: '17rem'}}
        transition={transition}
        
        style={{ top:"19rem", left: "12rem" }}>
            <Card
            emoji={Humble}
            heading={"Backend"}
            detail={"jQuerty, PHP"}
            />
        </motion.div>
        <div className="blur sblur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services