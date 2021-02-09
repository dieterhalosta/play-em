import React from "react";
import {
  CategoryPageContainer,
  TitleContainer,
  Title,
  CategoriesContainer,
  CategoryLink,
} from "./categories.style";
import CustomButton from "../../components/custom-button/custom-button.component";

const Categories = () => (
  <CategoryPageContainer>
    <TitleContainer>
      <Title>Categories</Title>
    </TitleContainer>
    <CategoriesContainer>
      <CategoryLink to='/action'>
        <CustomButton className='ltc'>Action</CustomButton>
      </CategoryLink>
      <CategoryLink to='/adventure'>
        {" "}
        <CustomButton className='ltc'>Adventure</CustomButton>
      </CategoryLink>
      <CategoryLink to='/animation'>
        {" "}
        <CustomButton className='ltc'>Animation</CustomButton>
      </CategoryLink>
      <CategoryLink to='/comedy'>
        {" "}
        <CustomButton className='ltc'>Comedy</CustomButton>
      </CategoryLink>
      <CategoryLink to='/crime'>
        {" "}
        <CustomButton className='ltc'>Crime</CustomButton>
      </CategoryLink>
      <CategoryLink to='/documentary'>
        {" "}
        <CustomButton className='ltc'>Documentary</CustomButton>
      </CategoryLink>
      <CategoryLink to='/drama'>
        {" "}
        <CustomButton className='ltc'>Drama</CustomButton>
      </CategoryLink>
      <CategoryLink to='/family'>
        {" "}
        <CustomButton className='ltc'>Family</CustomButton>
      </CategoryLink>
      <CategoryLink to='/fantasy'>
        <CustomButton className='ltc'>Fantasy</CustomButton>
      </CategoryLink>
      <CategoryLink to='/history'>
        {" "}
        <CustomButton className='ltc'>History</CustomButton>
      </CategoryLink>
      <CategoryLink to='/horror'>
        {" "}
        <CustomButton className='ltc'>Horror</CustomButton>
      </CategoryLink>
      <CategoryLink to='/music'>
        {" "}
        <CustomButton className='ltc'>Music</CustomButton>
      </CategoryLink>
      <CategoryLink to='/mystery'>
        {" "}
        <CustomButton className='ltc'>Mystery</CustomButton>
      </CategoryLink>
      <CategoryLink to='/romance'>
        {" "}
        <CustomButton className='ltc'>Romance</CustomButton>
      </CategoryLink>
      <CategoryLink to='/sci-fi'>
        {" "}
        <CustomButton className='ltc'>Science Fiction</CustomButton>
      </CategoryLink>
      <CategoryLink to='/tvmovie'>
        {" "}
        <CustomButton className='ltc'>TV Movie</CustomButton>
      </CategoryLink>
      <CategoryLink to='/thriller'>
        {" "}
        <CustomButton className='ltc'>Thriller</CustomButton>
      </CategoryLink>
      <CategoryLink to='/war'>
        {" "}
        <CustomButton className='ltc'>War</CustomButton>
      </CategoryLink>
      <CategoryLink to='/western'>
        {" "}
        <CustomButton className='ltc'>Western</CustomButton>
      </CategoryLink>
    </CategoriesContainer>
  </CategoryPageContainer>
);

export default Categories;
