import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: black;
`;

export const CarouselInner = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

export const CarouselItem = styled.div`
  min-width:100%
  transition: 0.5s;
  transform: ${(props) => `translateX(${props.x}%)`}
`;

export const Arrows = styled.div`
  flex: 2%;
  height: 100%;
  background-color: transparent;
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

export const CenterContent = styled.div`
  flex: 90%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: justify;
  text-align-last: center;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
`;
