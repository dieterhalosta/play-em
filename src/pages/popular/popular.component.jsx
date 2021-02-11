import React, { useContext } from "react";
import {
  PageContainer,
  TitleContainer,
  Title,
  PopularContainer,
  Items,
} from "./popular.style";
import { PopularContext } from "../../contexts/popular/popular.context";
import { renderMovies } from "../MoviesByCategory/movies-by-category.component";

const Popular = () => {
  const popularMovies = useContext(PopularContext);

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Popular</Title>
      </TitleContainer>
      <PopularContainer>
        <Items>{renderMovies(popularMovies)}</Items>
      </PopularContainer>
    </PageContainer>
  );
};

export default Popular;
