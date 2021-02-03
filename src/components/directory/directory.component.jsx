import React from 'react';
import {DirectoryContainer, CarouselContainer, CategoryContainer} from './directory.style';
import CategoryList from '../category-list/category-list.component';


const Directory = () => (
  <DirectoryContainer>
    <CarouselContainer>
     
    </CarouselContainer>
    <CategoryContainer>
      <CategoryList/>
    </CategoryContainer>   
  </DirectoryContainer>      
);      

export default Directory;