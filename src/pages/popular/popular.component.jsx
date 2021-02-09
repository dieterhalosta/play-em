import React from "react";
import {
  PageContainer,
  TitleContainer,
  Title,
  PopularContainer,
  Items,
} from "./popular.style";

const Popular = () => {
  return (
    <PageContainer>
      <TitleContainer>
        <Title>Popular</Title>
      </TitleContainer>
      <PopularContainer>
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
      </PopularContainer>
    </PageContainer>
  );
};

export default Popular;
