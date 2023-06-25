import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import id from '../Events.json';

import "../css/Events.css"

function App(props) {
    const [visible, setvisibility] = useState("box invis");
    const [index, setindex] = useState(0);
    function display_info() {
        setvisibility("box vis");
    }
    function hide_info() {
        setvisibility("box invis");
    }





    return (
        <div>

            <div className="flex flex-col justify-center items-center px-4 pb-28">
                <h1 className="text-center pt-10 pb-28 text-6xl font-semibold">Recent <span className="text-[#0060a1]">Events</span></h1>

                <div className="flex justify-center items-center w-full lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 md:px-4 ">
                        {props.recent.map((val, ind) => (
                            <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-3xl hover:shadow-black/30">

                                <div className={visible}>
                                    <h3 className="mt-3 text-center text-4xl font-black disp_head pt-6 pb-4">{val.heading}</h3>
                                    <div className="data">{val.data}</div>
                                    <button className='disp_btn' onClick={hide_info}><FaWindowClose /></button>
                                </div>

                                <div className="h-96 w-full">
                                    <img className="h-full w-full object-cover" src={val.img} alt="img" />
                                </div>

                                <div className="w-full absolute inset-0 ">


                                    <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] group-hover:translate-y-0 transition-transform ease-in duration-700 group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75">
                                        <div className="bg-[#1B2A2C] bg-opacity-75 w-full group-hover:bg-opacity-0 py-5">
                                            <h1 className="font-dmserif text-3xl font-bold text-white group-hover:mb-4 ">{val.heading}</h1>
                                        </div>
                                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val.content}</p>

                                        <div className="class"><button onClick={display_info}>Know More...</button></div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center py-16 text-6xl font-semibold wow animate__animated animate__fadeInUpBig">UPCOMING <span className="text-[#0060a1]">EVENTS</span></h1>

                <div className="w-full">
                    <div className="grid  pb-32 ">
                        {props.upcoming.map((val, e) => (
                            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30">
                                <div className=" h-full lg:h-[75vh]">
                                    <img className="h-full w-full object-cover group-hover:bg-opacity-0.1" src={val.img} alt="" />
                                </div>
                                <div className="w-full absolute inset-0">
                                    <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] group-hover:translate-y-0 transition-transform ease-in duration-700 group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75">
                                        <div className="bg-[#1B2A2C] bg-opacity-75 opacity-0 w-full py-4 mb-4 group-hover:bg-opacity-0 group-hover:opacity-100">
                                            <h1 className="font-dmserif text-6xl font-bold text-white mb-4 group-hover:mb-4 ">E-Summit <span className="text-[#0060a1]">2023</span></h1>
                                        </div>
                                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val.content}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App
