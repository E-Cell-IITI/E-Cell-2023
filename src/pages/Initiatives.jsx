import React from "react";
import CardContainer from "../helpers/CardContainer";
import "../css/Intiatives.css";
import data from "../data/Initiatives.json";

export default function Initiatives() {
  return (
    <div className="Initiatives bg-gradient-to-b from-[#144e6e] via-[##1375aa] via-[#0e6fa3] to-[#062f46]">
      <div className="Header flex items-center justify-center py-16 text-5xl">
        <h1 className="text-[#3282B8] hover:text-blue inline-block font-montserrat font-semibold leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red">
          OUR
        </h1>
        <h1 className="text-white hover:text-blue inline-block font-montserrat font-semibold leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red">
          INITIATIVES
        </h1>
      </div>
      <div className="container_Ini">
        {data.map((item) => (
          <CardContainer key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
}
