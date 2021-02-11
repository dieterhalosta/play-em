import React from "react";

import Carousel from "../../components/carousel/carousel.component";
import { SliderImage } from "../../components/carousel/carousel.style";
import { PopularContext } from "../../contexts/popular/popular.context";

const renderSlider = (popularItems) => {
  const sliderImages = popularItems.map((item) => (
    <SliderImage
      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
      alt='not found'
    />
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
