import React from 'react';
import {CarouselData} from '../Silder/SliderData'
import ImageSlider from './imageSlider/imageSlider.component';
import './carousel.style';

const Carousel = () => (
    <ImageSlider slides={CarouselData}/>
)

export default Carousel;