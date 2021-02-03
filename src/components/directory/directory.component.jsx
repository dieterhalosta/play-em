import React from 'react';
import {DirectoryContainer, CarouselContainer} from './directory.style';
import Carousel from '../silder/carousel.component';
const Directory = () => (
  <DirectoryContainer>
    <CarouselContainer>
     <Carousel/>
    </CarouselContainer> 
  </DirectoryContainer>      
);      

export default Directory;