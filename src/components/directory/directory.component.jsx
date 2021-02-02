import React from 'react';
import {DirectoryContainer, CarouselContainer, CategoryContainer} from './directory.style';
import CategoryList from '../category-list/category-list.component';
import Carousel from '../carousel/carousel.component';

const Directory = () => (
  <DirectoryContainer>
    <CarouselContainer>
      <Carousel/>
    </CarouselContainer>
    <CategoryContainer>
      <CategoryList/>
    </CategoryContainer>   
  </DirectoryContainer>      
);      

export default Directory;