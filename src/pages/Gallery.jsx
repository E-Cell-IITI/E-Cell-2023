import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaArrowLeft , FaArrowRight ,FaWindowClose} from "react-icons/fa";
// import "../App.css"
import "../css/Gallery.css"
import gallery_data from '../data/Gallery';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import { EffectCoverflow, Pagination ,Navigation ,Autoplay} from 'swiper';


export default function Gallery() {
  const[visible , setvisibility] = useState("box invis");
  const[index ,setindex]=useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1050;
  function display_info(){
    setvisibility("box vis");
  }
  function hide_info(){
    setvisibility("box invis");
  }
  React.useEffect(() => {
    
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
<>
<div className='gallery_container'>
<div className = {visible}>
  <h3 className="mt-3 text-center text-4xl font-black disp_head pt-6 pb-4">{gallery_data[index].heading}</h3>
  {gallery_data[index].disp_data}
  <button className='disp_btn' onClick={hide_info}><FaWindowClose/></button>
</div>
        <h1 className="p-16 mt-0 heading">GALLER<span className="">Y</span></h1>
    <div className='container'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={width < breakpoint ? 2: 3}
        coverflowEffect={{
            rotate:0,
            stretch :0,
            depth :100 ,
            modifier :2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        autoplay={{delay : 3000 ,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation ,Autoplay]}
        className='swiper_container'
        >
          {gallery_data.map((info ,ind)=>(
            <SwiperSlide>
              {({ isActive }) => (
                
                isActive ?<><div className='info rounded-3xl'>
                    <h1 className="info_heading">{info.heading}</h1>
                    <p className='info_data'>{info.slide_data}</p>
                    {setindex(ind)}
                    <button onClick={display_info}>Know More...</button>
                  </div> 
                  <img src={/*process.env.PUBLIC_URL +*/ info.image_url} alt="images" className='gallery_img active_slide w-full xl:h-[400px] lg:h-[350px] object-cover rounded-3xl' /></> :  <img src={process.env.PUBLIC_URL + info.image_url} alt="images" className='gallery_img w-full xl:h-[400px] lg:h-[300px] object-cover rounded-3xl '/>
                // <div className='info'>Current slide is {isActive ? 'active' : 'not active'}</div>
              )}
              
            </SwiperSlide>
          ))} 
      

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft></FaArrowLeft>
        </div>
        <div className="swiper-button-next slider-arrow">
            <FaArrowRight></FaArrowRight>
        </div>
        {/* <div className="swiper-pagination"></div> */}
      </div>
      </Swiper>
    </div>
    </div>
    </>
  )
}