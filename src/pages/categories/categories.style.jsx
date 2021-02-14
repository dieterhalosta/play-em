import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.div`
  height: 30%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const CategoriesBox = styled.div`
height: 70%;
width: 100%;
display: inline-grid;
grid-gap: 50px;
grid-template-columns: auto auto auto;
justify-content: space-evenly;
`;

export const CategoriesContainer = styled.div`
`;

export const CategoryLink = styled(Link)`
  cursor: pointer;
  text-align: center;
  .ltc {
    font-size: 2rem;
  }
`;
