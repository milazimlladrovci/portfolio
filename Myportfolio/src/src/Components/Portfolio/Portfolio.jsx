import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Caffe from "../../img/caffe.png";
import Flower from "../../img/flower.png";
import Restoo from "../../img/restoo.png";
import Home from "../../img/home.png";
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

            {/* slider */}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3.7}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Caffe} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Flower} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Restoo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Home} alt="" />
                </SwiperSlide>



            </Swiper>
    </div>
  )
}

export default Portfolio