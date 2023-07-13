import React from "react";
import { useInView } from "react-intersection-observer";

import "../css/About.css";

export default function About(props) {
  // applying animation only when the about section appears on the screen

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the section becomes visible
    threshold: 0.3, // Percentage of the section's visibility required to trigger the intersection
  });

  return (
    <section id="about">
    <div
      ref={ref}
      className={`about w-full h-fit bg-gradient-to-b from-[#84a9be00] to-[#3282b885] py-24 pb-12 ${
        inView ? "aboutSectionVisible" : ""
      }`}
    >
      <div className="aboutContainer fluid justify-center items-center max-w-[70vw] mx-auto text-center">
        <div className="overflow-hidden p-1">
          <h1 className="font-['Inter'] font-bold text-5xl -tracking-[0.04em] text-black capitalize leading-10 wow animate__animated animate__fadeInUp ">
            E-CELL <span className="text-[#0060A1]">IIT INDORE</span>
          </h1>
        </div>
        <div className="font-['Inter'] font-semibold text-[140%] -tracking-[0.04em] leading-[30px] mt-8 overflow-hidden mb-20 ">
          <p className="para1 text-[#1B262C] font-normal wow animate__animated animate__fadeInUp">
         {props.content1}
          </p>
        </div>
        <div className="overflow-hidden p-1">
          <h1 className=" font-['Inter'] font-bold text-5xl -tracking-[0.04em] text-black capitalize wow animate__animated animate__fadeInUp">
            OUR <span className="text-[#0060A1]">VISION</span>
          </h1>
        </div>
        <div className="font-['Inter'] font-semibold text-[140%] -tracking-[0.04em] leading-[30px] mt-8 overflow-hidden ">
          <p className="para1 text-[#1B262C] font-normal wow animate__animated animate__fadeInUp">
          {props.content2}
          <br></br>
          {props.content3}
          <br></br>
          {props.content4}
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
