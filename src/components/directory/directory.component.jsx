import React from 'react';
import {DirectoryMenu} from './directory.style';
import CategoryList from '../category-list/category-list.component';
import Carousel from '../carousel/carousel.component';

const Directory = () => (
  <DirectoryMenu>
      <Carousel/>
      <CategoryList/>
      </DirectoryMenu>      
);      

export default Directory;