import React, { useContext } from "react";
import CategoryItem from "../../components/category-item/category-item.component.jsx";
import CategoryContext from "../../contexts/categories/category.context";
import {
  CategoryPageContainer,
  CategoryTitle,
  CategoryItemsContainer,
} from "./category.style";

const CategoryPage = ({ match }) => {
  const categories = useContext(CategoryContext);
  const category = categories[match.params.categoryId];
  const { title, items } = category;

  return (
    <CategoryPageContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryItemsContainer>
        {items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </CategoryItemsContainer>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
