import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const TitleContainer = styled.div`
  height: 30%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;
export const CategoriesContainer = styled.div`
  display: inline-grid;
  height: 70%;
  width: 100%;
  justify-content: space-evenly;
  grid-gap: 50px;
  grid-template-columns: auto auto auto;
`;
export const CategoryLink = styled(Link)`
  cursor: pointer;
  text-align: center;
  .ltc {
    font-size: 2rem;
  }
`;
