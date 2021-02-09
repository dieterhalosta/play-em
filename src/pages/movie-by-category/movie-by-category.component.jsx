import React from "react";
import {
  PageContainer,
  TitleContainer,
  Title,
  ItemsContainer,
  Items,
} from "./movie-by-category.style";
import CategoryItem from "../../components/category-item/category-item.component";
const MovieByCategory = () => {
  return (
    <PageContainer>
      <TitleContainer>
        <Title>Comedy</Title>
      </TitleContainer>
      <ItemsContainer>
        <Items>
          <div className='box'>
            <h2>Dell</h2>
            <button>Click here</button>
          </div>
        </Items>
        <Items>
          <div className='box'>
            <h2>Dell</h2>
            <button>Click here</button>
          </div>
        </Items>
        <Items>
          <div className='box'>
            <h2>Dell</h2>
            <button>Click here</button>
          </div>
        </Items>
        <Items>
          <div className='box'>
            <h2>Dell</h2>
            <button>Click here</button>
          </div>
        </Items>
      </ItemsContainer>
    </PageContainer>
  );
};

export default MovieByCategory;
