import React from "react";
// import astro from "../img/astro.png";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="astro" />
    </div>
  );
};

export default Card;
