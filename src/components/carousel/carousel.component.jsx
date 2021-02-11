import React, { useState } from "react";
import {
  SliderWrapper,
  SliderItem,
  LeftButton,
  RightButton,
} from "./carousel.style";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = ({ sliderItems }) => {
  const [current, setCurrent] = useState(0);

  const moveLeft = () => {
    current === 0 ? setCurrent(-100 * (sliderItems.length - 1)) : setCurrent(current + 100);
  };

  const moveRight = () => {
    current === -100 * (sliderItems.length - 1) ? setCurrent(0) : setCurrent(current - 100);
  };

  return (
    <SliderWrapper>
      {sliderItems.map((item, index) => {
        return (
          <SliderItem key={index} current={current}>
            {item}
          </SliderItem>
        );
      })}
      <LeftButton onClick={moveLeft}>
        <FaArrowLeft style={{ fontSize: 30 }} />
      </LeftButton>
      <RightButton onClick={moveRight}>
        <FaArrowRight style={{ fontSize: 30 }} />
      </RightButton>
    </SliderWrapper>
  );
};

export default Carousel;
