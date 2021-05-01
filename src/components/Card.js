import React from "react";
// import astro from "../img/astro.png";

import { StyledCard, StyledCardImage, StyledCardInner, StyledCardBg } from "./styled";

const Card = ({ image, onClick }) => {
  // const checkCard = () => {
  //   if (images.completed === false) {
  //     images.completed = true;
  //     console.log(images.completed);
  //   } else {
  //     for (let i = 0; i < images.length; i++) {
  //       for (let j = 0; j < images.length; j++) {
  //         if (images[i].id === images[j].id && images[i].completed === true) {
  //           images[j].completed = true;
  //         }
  //       }
  //     }
  //   }
  // };

  // ------------------------ласт версия------------------------
  // const checkCard = () => {
  //   for (let i = 0; i < images.length; i++) {
  //     for (let j = 0; j < images.length; j++) {
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

  return (
    <StyledCard rotated={image.rotated || image.completed} onClick={() => onClick(image.id)}>
      <StyledCardInner>
        <StyledCardBg />
        <StyledCardImage rotated={image.rotated} src={image.src} alt="card" />
      </StyledCardInner>
    </StyledCard>
  );
};

export default Card;
