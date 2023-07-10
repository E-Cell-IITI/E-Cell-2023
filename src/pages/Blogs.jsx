import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay} from 'swiper';
import { Link } from "react-router-dom"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


export default function Blogs(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
     <section id="blogs">
    <div className='bg-gradient-to-t from-[#0F4F7A] to-[#DDDDDD] py-4'>
    <div className = "flex-col min-h-screen items-center justify-center ">
     <div className='flex items-center justify-center text-center gap-4 text-6xl font-semibold my-16 mb-36 translate-y-[100%] drop-shadow-lg transition-transform duration-500 transform'>
       <div className='drop-shadow-lg'>OUR</div>
       <div className='text-[#0060A1]'>BLOGS</div>   
</div>
  <div className = " items-center justify-center">
 
  <div className="px-12 md:px-2 lg:px-10" style={{width: width+55}}>
  <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='px-8 w-full'
      breakpoints={{
        0: {
            slidesPreview:1,
            spaceBetween:35,

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
        {props.blogs.map((val,e)=>(
            <SwiperSlide> <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
            <div className="h-96">
                <img  className ="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={val.img} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[60%] group-hover:translate-y-0 transitin-all">
                    <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4">{val.heading}</h1>
                    <p className='w-full mb-6 text-right font-semibold'>{val.date}</p>
                    <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val.content}</p>
                    <a href={val.link} class="px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200" >Read More</a>
                    
                </div>
            </div>
        </div></SwiperSlide>
        ))}
    </Swiper> 
    </div>
    </div>
  </div>
</div>
</section>
  )
}


