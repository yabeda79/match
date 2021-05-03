import React from "react";

import { StyledScore, StyledScoreText } from "./styled";

const Score = ({ score, highScore }) => {
  return (
    <StyledScore>
      <StyledScoreText>Time: {score}</StyledScoreText>
      <StyledScoreText>Best time: {highScore}</StyledScoreText>
    </StyledScore>
  );
};

export default Score;
