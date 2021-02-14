import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  width: 100%;
`;
export const TitleContainer = styled.div``;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const ItemsContainer = styled.div`
  height: 70%;
  width: 100%;
  display: inline-grid;
  grid-gap: 50px;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
`;

export const Items = styled.div``;

export const MovieCard = styled(Link)`
  border-radius: 25px;
  max-height: 300px;
  transition: 0.5s;
  text-decoration: none !important;
  img {
    height: 360px;
    border-radius: 25px;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
export const MovieCardTitleContainer = styled.div``;

export const MovieCardTitle = styled.h4``;
