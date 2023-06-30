import React from "react";
import ReactDOM from "react-dom";
// import "../css/style.css"

const CardContainer = ({ title, body,imagePath}) => (
  <div>
    <h1 className=" text-5xl font-semibold text-center pb-2 px-4 h-[fit-content] md:h-[4vh] text-white">{title}</h1>
  <div className="card">
    <img className="h-96 w-full object-cover rounded-3xl" src={imagePath}></img>
    <div className="card-content">
      {/* <h2 className="inline-block text-3xl font-medium font-bold leading-8 card-title font-montserrat py-4 px-[1.5rem]">
        {title}
      </h2> */}
      <p className="card-body">{body}</p>
    </div>
   </div>
   </div>
);

export default CardContainer;
