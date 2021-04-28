import React from "react";
// import astro from "../img/astro.png";

const Card = ({ images, setImages }) => {
  // const checkCard = () => {
  //   if (images.completed === false) {
  //     images.completed = true;
  //     console.log(images.completed);
  //   } else {
  //     for (let i = 0; i < images.lengh; i++) {
  //       for (let j = 0; j < images.lengh; j++) {
  //         if (images[i].id === images[j].id && images[i].completed === true) {
  //           images[j].completed = true;
  //         }
  //       }
  //     }
  //   }
  // };
  const rotateCard = () => {
    // images.rotated = !images.rotated;
    setImages((images.rotated = true));
    console.log(images.rotated);
  };
  // ------------------------ласт версия------------------------
  // const checkCard = () => {
  //   for (let i = 0; i < images.lengh; i++) {
  //     for (let j = 0; j < images.lengh; j++) {
  //       if (
  //         images[i].id === images[j].id &&
  //         images[i].rotated === true &&
  //         images[j].rotated === true
  //       ) {
  //         console.log("i= " + i + ",j= " + j);
  //       }
  //     }
  //   }
  // };

  const main = () => {
    rotateCard();
    // checkCard();
  };

  return (
    <div onClick={main} className="card">
      <img src={images.src} alt="card" />
    </div>
  );
};

export default Card;
