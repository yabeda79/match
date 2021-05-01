import styled from "styled-components";

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

export const StyledCardImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
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

// для дива

// transform: rotateY(${({ rotated }) => rotated ? 180 : 0}deg);
// transform: translate(-50%, -50%);

// transition: transform 0.5s;
//  transform: scaleX(${({ rotated }) => (rotated ? 0 : 1)});
