import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s;
  transform: rotateY(${({ rotated }) => rotated ? 180 : 0}deg);
`;

export const StyledCardImage = styled.img`
  width: auto;
  height: 150px;
  overflow: hidden;
`;