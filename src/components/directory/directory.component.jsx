import React from "react";
import { DirectoryContainer, CarouselContainer } from "./directory.style";
import Carousel from "../carousel/carousel.component";
import { CarouselImage } from "../carousel/carousel.style";
import PopularVideoContext from "../../contexts/popular/popular.context";

const renderCarousel = (popularItems) => {
  const carouselImages = popularItems.map((item) => (
    <CarouselImage
      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
      alt='not found'
    />
  ));
  return <Carousel carouselItems={carouselImages} />;
};

const Directory = () => (
  <DirectoryContainer>
    <CarouselContainer>
      <PopularVideoContext.Consumer>
        {(popularItems) => renderCarousel(popularItems)}
      </PopularVideoContext.Consumer>
    </CarouselContainer>
  </DirectoryContainer>
);

export default Directory;
