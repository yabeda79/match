import styled from "styled-components";

export const StyledCard = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCardBg = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  
  min-width: 150px;
  min-height: 150px;
  margin: 5px;
  background: blue;
  transition: transform 0.5s;
  transform: translate(-50%, -50%) scaleX(${({ rotated }) => (rotated ? 0 : 1)});
  display: ${({ rotated }) => (rotated ? 'none' : 'block')}
`;

export const StyledCardImage = styled.img`
  width: auto;
  height: 150px;
  overflow: hidden;
  transition: transform 0.5s;
  transform: scaleX(${({ rotated }) => (rotated ? 1 : 0)});
`;

// для дива

// transform: rotateY(${({ rotated }) => rotated ? 180 : 0}deg);
// transform: translate(-50%, -50%);

// transition: transform 0.5s;
//  transform: scaleX(${({ rotated }) => (rotated ? 0 : 1)});
