import React from "react";
import ReactDOM from "react-dom";
// import "../css/style.css"

const CardContainer = ({ title, body,imagePath}) => (
  <div className="card" style={{ backgroundImage: "url(" + {imagePath} + ")", }}>
    <div className="card-content">
      <h2 className="inline-block text-lg font-medium font-bold leading-8 card-title font-montserrat">
        {title}
      </h2>
      <p className="card-body">{body}</p>
    </div>
  //  </div>
);

export default CardContainer;
