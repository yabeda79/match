import React from "react";
// import astro from "../img/astro.png";

import {
  StyledCard,
  StyledCardImage,
  StyledCardInner,
  StyledCardBg,
} from "./styled";

const Card = ({ image, onClick }) => {
  return (
    <StyledCard onClick={() => onClick(image.id)}>
      <StyledCardInner rotated={image.rotated || image.completed}>
        <StyledCardBg />
        <StyledCardImage rotated={image.rotated} url={image.url} alt="card" />
      </StyledCardInner>
    </StyledCard>
  );
};

export default Card;
