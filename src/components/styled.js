import styled from "styled-components";

// Card component

export const StyledCard = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

export const StyledCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(${({ rotated }) => rotated ? 180 : 0}deg);
  transition: transform 0.5s;
`;

export const StyledCardImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  backface-visibility: hidden;
  background-color: dodgerblue;
  transform: rotateY(180deg);
`;

export const StyledCardBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
`;

// Score component

export const StyledScore=styled.div`
  display: flex;
  justify-items: left;
  margin: 10px;
`

export const StyledScoreText=styled.p`
  margin:10px;
  display: block;
  font-size: 24px;
  color: white;
`

