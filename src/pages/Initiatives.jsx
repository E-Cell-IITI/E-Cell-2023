import React from "react";
import CardContainer from "../helpers/CardContainer";
import "../css/Intiatives.css";
import data from "../data/Initiatives.json";

export default function Initiatives() {
  return (
    <div className="Initiatives">
      <div className="Header">
        <h1 className="text-blue hover:text-blue inline-block font-montserrat font-bold text-4xl leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red">
          OUR
        </h1>
        <h1 className="text-#3282B8 hover:text-blue inline-block font-montserrat font-bold text-4xl leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red">
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
