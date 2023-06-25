import React from "react";
import ReactDOM from "react-dom";
// import "../css/style.css"

const CardContainer = ({ title, body,imagePath}) => (
  <div>
    {/* <h1 className=" text-4xl font-semibold text-center pb-6">{title}</h1> */}
  <div className="card h-[50vh] md:h-[37vh] lg:h-[50vh]" style={{ backgroundImage: `url(${imagePath})`, }}>
    <div className="card-content">
      <h2 className="inline-block text-3xl font-medium font-bold leading-8 card-title font-montserrat bg-gradient-to-r from-[#020202] to-[#31353750] py-4 px-[1.5rem]">
        {title}
      </h2>
      <p className="card-body">{body}</p>
    </div>
   </div>
   </div>
);

export default CardContainer;
