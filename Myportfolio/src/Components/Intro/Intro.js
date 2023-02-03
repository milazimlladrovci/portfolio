import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion' 


const intro = () => {

    const transition = {duration : 2, type: 'spring'}

    
  return (
    <div className="intro">
        <div className='i-left'>
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Milazim Lladrovci</span>
                <span>Frontend Developer of experience in web development,
                     producting the Quality  work.
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/milazimlladrovci' target='blank' >
                <img src={Github} alt="" /></a>
                <a href='https://www.linkedin.com/in/milazim-lladrovci-5a3ba2250/' target="blank">
                <img src={LinkedIn} alt="" /></a>
                <a href='https://www.instagram.com/milazimlladrovci/' target="blank"> 
                <img src={Instagram} alt="" /></a>
            </div>

        </div>
        <div className="i-right">

            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView = {{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />


            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView = {{left: '68%'}}
            transition={transition}
            
            style={{top: '-4%', left: '68%'}}
            className='floating-div'>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
            initial={{left: '9rem', top: '18rem'}}
            whileInView = {{left: '0rem'}}
            transition={transition}
            
            
            style={{top: '370px', left: '-30px'}}
            className='floating-div'>
                <FloatingDiv image={thumbup} txt1='Best React' txt2='Award' />
            </motion.div>
            {/* blur divs */}
            <div className='blur' style={{ background: "rgb(238 210 255"}}>
            </div>
            <div className="blur"
            style={{
                background: '#C1F5FF',
                top: '272px',
                width: '336px',
                height: '176px',
                left:'-144px'
            }}   
            ></div>
        </div>
    </div>
  )
}
export default intro