import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  CarouselContainer,
  CarouselInner,
  CarouselItem,
  Arrows,
  CenterContent,
} from "./carousel.style";

const Carousel = ({carouselItems}) => {
  const [current, setCurrent] = useState(0);
  const lenght = carouselItems.length;

  const moveLeft = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  const moveRight = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  return (
    <CarouselContainer>
      <CarouselInner>
        {carouselItems.map((item, index) => {
          return (
            <CarouselItem key={index} x={current}>{item}</CarouselItem>
            )
        })}
        <Arrows onClick={moveLeft}>
          <FaArrowLeft style={{ fontSize: 30 }} />
        </Arrows>
        <CenterContent />
        <Arrows onClick={moveRight}>
          <FaArrowRight style={{ fontSize: 30 }} />
        </Arrows>
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel;
