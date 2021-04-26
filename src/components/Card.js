import React from "react";
// import astro from "../img/astro.png";

const Card = ({images}) => {
  return (
    <div className="card">
      <img src={images} alt="astro" />
    </div>
  );
};

export default Card;
