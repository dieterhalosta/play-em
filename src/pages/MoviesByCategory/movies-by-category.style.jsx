import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const TitleContainer = styled.div`
height:40%:
width:100%;`;
export const Title = styled.h1`
  font-size: 3rem;
`;
export const ItemsContainer = styled.div`
  height: 80%;
  width: 100%;
`;
export const Items = styled.div`
  display: inline-grid;
  justify-content: space-evenly;
  grid-gap: 50px;
  grid-template-columns: auto auto auto;
  align-items: center;
`;
export const MovieCard = styled(Link)`
  cursor: pointer;
`;
export const MovieCardTitleContainer = styled.div``;
export const MovieCardTitle = styled.h6``;
