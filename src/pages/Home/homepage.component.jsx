import React from "react";
import {
  SliderDetails,
  SliderImage,
  TitleContainer,
  Title,
} from "../../components/carousel/carousel.style";
import Carousel from "../../components/carousel/carousel.component";
import { PopularContext } from "../../contexts/popular/popular.context";

const renderSlider = (popularItems) => {
  const sliderImages = popularItems.map((item) => (
    <SliderDetails>
      <TitleContainer>
        <Title>{item.title}</Title>
      </TitleContainer>
      <SliderImage
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt='not found'
      />
    </SliderDetails>
  ));

  return <Carousel sliderItems={sliderImages} />;
};

const HomePage = () => {
  return (
    <React.Fragment>
      <PopularContext.Consumer>
        {(popularItems) => renderSlider(popularItems)}
      </PopularContext.Consumer>
    </React.Fragment>
  );
};

export default HomePage;
