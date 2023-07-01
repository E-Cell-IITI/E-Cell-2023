import React from "react";
import CardContainer from "../helpers/CardContainer";
import "../css/Intiatives.css";
import data from "../data/Initiatives.json";

export default function Initiatives() {
  return (
    <section id="initiatives">
    <div className="Initiatives bg-gradient-to-b from-[#051923] via-[#3282B885] via-[#00538169] to-[#051923] py-20">
      <div className="md:flex items-center justify-center py-12 text-6xl px-12">
        <h1 className="hover:text-blue inline-block font-montserrat font-semibold leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red px-2 py-4 text-white">
          OUR
        </h1>
        <h1 className="text-[#3282B8] hover:text-blue inline-block font-montserrat font-semibold leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red px-2 py-4">
          INITIATIVES
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-12 md:mx-32 pb-16 gap-20 lg:mx-28 lg:gap-24 pt-12">
      {data.map((item) => (
  <CardContainer
    key={item.id}
    title={item.title}
    body={item.body}
    imagePath={item.imagePath} // this is the path of the image
  />
))}
     
      </div>
    </div>
          
    </section>
  );
}
