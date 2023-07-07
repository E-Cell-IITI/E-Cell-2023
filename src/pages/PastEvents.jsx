import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaArrowLeft , FaArrowRight ,FaWindowClose} from "react-icons/fa";
// import "../App.css"
import "../css/PastEvents.css"
import gallery_data from '../data/Gallery';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import { EffectCoverflow, Pagination ,Navigation ,Autoplay} from 'swiper';


export default function Gallery() {
  const [auto_play ,setautoplay]=useState(true);
  const[visible , setvisibility] = useState("box invis");
  const [show ,set_show] = useState(true);
  const[index ,setindex]=useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint1 = 1050;
  const breakpoint2 = 600;
  function display_info(){
    setautoplay(false);
    setvisibility("box vis");
  }
  function hide_info(){
    setautoplay(true);
    setvisibility("box invis");
  }
  React.useEffect(() => {
    
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
<>
    <section id="gallery">
<div className='gallery_container'>
<div className = {visible}>
  <h3 className="mt-3 text-center text-4xl font-black disp_head pt-6 pb-4">{gallery_data[index].heading}</h3>
  {gallery_data[index].disp_data}
  <button className='disp_btn' onClick={hide_info}><FaWindowClose/></button>
</div>
        <h1 className="p-16 mt-0 heading ">PAST<span className=""> EVENTS</span></h1>
    <div className='container ' >
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={(width > breakpoint1) ? 3 : (width > breakpoint2) ? 2 : 1}
        coverflowEffect={{
            rotate:0,
            stretch :0,
            depth :100 ,
            modifier :2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
          autoplay={{delay : auto_play ? 3000 :30000 ,
          pauseOnMouseEnter:auto_play ? true : false,
          disableOnInteraction: false,
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
            <SwiperSlide >
              {({ isActive }) => (
                
                isActive ?<><div className='info rounded-3xl' onMouseOver={()=>{
                  set_show(false); 
                }} onMouseLeave={()=>{
                  set_show(true);
                }}>
                    <h1 className="info_heading">{info.heading}</h1>
                    <p className='info_data'>{info.slide_data}</p>
                    {auto_play ? setindex(ind) : null}
                    <button onClick={display_info}>Know More...</button>
                  </div> 
                  {show ? <div className='img_heading rounded-3xl'>
                  <h1 className="xl:text-3xl lg:text-2xl text-2xl py-4">{info.heading}</h1>
                  </div> : null}
                  <img src={process.env.PUBLIC_URL + info.image_url} alt="images" className='gallery_img active_slide sm:w-full xl:h-[400px] lg:h-[350px] object-cover rounded-3xl h-[300px]' /></> :  <img src={process.env.PUBLIC_URL + info.image_url} alt="images" className='gallery_img w-full xl:h-[400px] lg:h-[300px] object-cover rounded-3xl h-[300px]'/>
                  
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
</section>
    </>
  )
}
