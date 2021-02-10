import React from "react";
import {
  CategoryPageContainer,
  TitleContainer,
  Title,
  CategoriesBox,
  CategoriesContainer,
  CategoryLink,
} from "./categories.style";
import CustomButton from "../../components/custom-button/custom-button.component";
import CategoryContext, { CategoryStore } from "../../contexts/categories/category.context";

const renderCategories = (categories) => {
  return categories.map((item) => {
    return (
      <CategoriesContainer key={item.id}>
        <CategoryLink to={`/movies/${item.id}`}>
          <CustomButton>{item.name}</CustomButton>
        </CategoryLink>
      </CategoriesContainer>
    );
  });
};

const CategoriesPage = () => {
  return (
    <CategoryStore>
      <CategoryContext.Consumer>
        {(categories) => {
          return (
            <CategoryPageContainer>
              <TitleContainer>
                <Title>Categories</Title>
              </TitleContainer>
              <CategoriesBox>{renderCategories(categories)}</CategoriesBox>
            </CategoryPageContainer>
          );
        }}
      </CategoryContext.Consumer>
    </CategoryStore>
  );
};

export default CategoriesPage;
