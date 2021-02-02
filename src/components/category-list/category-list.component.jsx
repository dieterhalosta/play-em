import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {CategoryContainer, CategoryContainerTitle, ButtonsContainer} from './category-list.style';

const CategoryList = () => (
    <CategoryContainer>
        <CategoryContainerTitle>Categories</CategoryContainerTitle>
        <ButtonsContainer>
            <CustomButton>Comedy</CustomButton>
            <CustomButton>Drama</CustomButton>
            <CustomButton>Thriller</CustomButton>
            <CustomButton>Action</CustomButton>
        </ButtonsContainer>
        <ButtonsContainer>
            <CustomButton>Horror</CustomButton>
            <CustomButton>Documentary</CustomButton>
            <CustomButton>Indie</CustomButton>
            <CustomButton>Romantic</CustomButton>
        </ButtonsContainer>
    </CategoryContainer>   

);

export default CategoryList;