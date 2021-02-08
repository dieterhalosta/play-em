import React, { useContext } from "react";
import CategoryItem from "../../components/category-item/category-item.component.jsx";
import {
  PopularContainer,
  TitleContainer,
  ItemsContainer,
} from "./popular.style";
import PopularContext from "../../contexts/categories/category.context";

const Popular = ({ match }) => {
  const populars = useContext(PopularContext);
  console.log(populars.map)
  const popular = populars[match.params];
  const { title, items } = popular;
  return (
    <PopularContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </PopularContainer>
  );
};

export default Popular;
