import React from "react";
import CardContainer from "../helpers/CardContainer";
import "../css/Intiatives.css";
import data from "../data/Initiatives.json";

export default function Initiatives() {
  return (
    <div className="Initiatives">
      <div className="md:flex items-center justify-center py-16 text-5xl px-12">
        <h1 className="hover:text-blue inline-block font-montserrat font-semibold leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red px-2 py-4">
          OUR
        </h1>
        <h1 className="text-[#0060A1] hover:text-blue inline-block font-montserrat font-semibold leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red px-2 py-4">
          INITIATIVES
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 pb-16 gap-20 lg:mx-28 lg:gap-24">
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
  );
}
