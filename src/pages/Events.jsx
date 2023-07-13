import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
// import id from '../Events.json';

import "../css/Events.css"

function App(props) {
    const [visible, setvisibility] = useState("box invis");
    const [index, setindex] = useState(0);
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("")
    // function display_info() {
    //     setvisibility("box vis");
    // }
    function hide_info() {
        setvisibility("box invis");
    }





    return (
        <section id = "events">
        <div className="py-16 md:py-24">
             <div className={visible}>
                    <h3 className="mt-3 text-center text-4xl font-black disp_head pt-6 pb-4">{heading}</h3>
                    <div className="data">{content}</div>
                    <button className='disp_btn' onClick={hide_info}><FaWindowClose /></button>
            </div>

            <div className="flex flex-col justify-center items-center px-8 pb-20">
                <h1 className="text-center pt-10 pb-20 md:pb-28 text-6xl font-semibold wow animate__animated animate__fadeInUp">Recent <span className="text-[#0060a1]">Events</span></h1>

               

                <div className="flex justify-center items-center w-full lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-6 md:px-8 ">
                        
                            

                                
                                {props.recent.map((val, ind) => (
                                <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-3xl hover:shadow-black/30 wow animate__animated animate__fadeInUp">
                                <div className="h-96 w-full">
                                    <img className="h-full w-full object-cover" src={val.img} alt="img" />
                                </div>

                                <div className="w-full absolute inset-0 ">


                                    <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] md:translate-y-[66%] group-hover:translate-y-0 transition-transform ease-in duration-700 group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75">
                                        <div className="bg-[#1B2A2C] bg-opacity-75 w-full group-hover:bg-opacity-0 py-7 pb-9">
                                            <h1 className="font-dmserif text-3xl font-bold text-white group-hover:mb-4 ">{val.heading}</h1>
                                        </div>
                                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[19vh] md:h-[13vh] lg:h-[16vh]">{val.content}</p>

                                        <div className="class"><button onClick={()=>{
                                            setvisibility("box vis");
                                            setHeading(val.heading)
                                            setContent(val.data)
                                        }}>Know More...</button></div>

                                    </div>
                                </div>
                                </div>
                                ))}
                            
                        
                    </div>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center py-20 text-6xl font-semibold wow animate__animated animate__fadeInUp">UPCOMING <span className="text-[#0060a1]">EVENTS</span></h1>

                <div className="w-full">
                    <div className="grid  pb-20 md:pb-32">
                        {props.upcoming.map((val, e) => (
                            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 wow animate__animated animate__fadeInUp">
                                <div className=" h-full lg:h-[75vh]">
                                    <img className="h-full w-full group-hover:bg-opacity-0.1" src={val.img} alt="image" />
                                </div>
                                <div className="w-full absolute inset-0 h-full lg:h-[75vh]">
                                    <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] group-hover:translate-y-0 md:group-hover:translate-y-0 transition-transform ease-in duration-700 group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75">
                                        <div className="bg-[#1B2A2C] bg-opacity-75 opacity-0 w-full md:py-4 md:mb-4 group-hover:bg-opacity-0 group-hover:opacity-100">
                                            <h1 className="font-dmserif text-2xl md:text-6xl font-bold text-white mb-4 group-hover:mb-0 md:group-hover-mb-4 ">E-Summit <span className="text-[#0060a1]">2023</span></h1>
                                        </div>
                                        <div className="h-30vh">
                                        <p className="text-[0.7rem] md:text-lg italic text-white md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-0">{val.content}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
};

export default App
