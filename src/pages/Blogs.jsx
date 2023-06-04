import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { useState, useRef, useEffect } from 'react';

import img from '../images/mcd.jpg';
import img1 from '../images/ipl.webp';
import img2 from '../images/amul.gif'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


export default function Blogs() {

  return (
    <div className='bg-gradient-to-t from-[#0F4F7A] to-[#DDDDDD] py-4'>
    <div className = "flex-col min-h-screen items-center justify-center ">
     <div className='flex items-center justify-center text-center gap-4 text-6xl font-bold my-16 mb-36 translate-y-[100%] drop-shadow-lg transition-transform duration-500 transform translate-x-0'>
       <div className='drop-shadow-lg'>OUR</div>
       <div className='text-[#0060A1]'>BLOGS</div>   
</div>
  <div className = "flex items-center justify-center">
 
  <div className="px-4 md:px-6 lg:px-10 w-full">
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='px-8'
      breakpoints={{
        0: {
            slidesPreview:1,
            spaceBetween:10,

        },
        768: {
            slidesPerView:2,
            spaceBetween:50.
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide> <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96 w-full">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">Detangling McDonalds</h1>
                    <p className='w-full mb-4 text-right'>15 May 2023</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering...</p>
                    <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        Read More
                    </button>
                    
                </div>
            </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96 w-full">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={img1} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">IPL - Case Study</h1>
                    <p className='w-full mb-4 text-right'>15 May 2023</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering...</p>
                    <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        Read More
                    </button>
                    
                </div>
            </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96 w-full">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={img2} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">Amul - Case Study</h1>
                    <p className='w-full mb-4 text-right'>15 May 2023</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering...</p>
                    <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        Read More
                    </button>
                    
                </div>
            </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96 w-full">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={img1} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">IPL - Case Study</h1>
                    <p className='w-full mb-4 text-right'>15 May 2023</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering...</p>
                    <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        Read More
                    </button>
                    
                </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96 w-full">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">Detangling McDonalds</h1>
                    <p className='w-full mb-4 text-right'>15 May 2023</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering...</p>
                    <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        Read More
                    </button>
                    
                </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96 w-full">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={img2} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">Amul - Case Study</h1>
                    <p className='w-full mb-4 text-right'>15 May 2023</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering...</p>
                    <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        Read More
                    </button>
                    
                </div>
            </div>
        </div></SwiperSlide>
      ...
    </Swiper> 
    </div>
    </div>
  </div>
</div>
  )
}

