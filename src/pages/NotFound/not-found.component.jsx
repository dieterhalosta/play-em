import React,{useContext} from "react";
import {
  PageContainer,
  MessageContainer,
  Message,
  PopularContainer,
  Items,
} from "./not-found.style";
import PopularContext from '../../contexts/popular/popular.context'
import {renderMovies} from '../MoviesByCategory/movies-by-category.component'
const NotFound = () => {
  const popularMovies = useContext(PopularContext)
  return (
    <PageContainer>
      <MessageContainer>
        <Message>Oooops...Item was not found</Message>
      </MessageContainer>
      <PopularContainer>
        <Items>{renderMovies(popularMovies)}</Items>
      </PopularContainer>
    </PageContainer>
  );
};

export default NotFound;
