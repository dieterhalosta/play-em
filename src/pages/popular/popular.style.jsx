import React from "react";
import styled from "styled-components";

export const PageContainer = styled(React.Fragment)`
  height: 100%;
`;
export const TitleContainer = styled.div``;
export const Title = styled.h1`
  font-size: 4rem;
`;
export const PopularContainer = styled.div`
`;
export const Items = styled.div`
  height: 70%;
  width: 100%;
  display: inline-grid;
  grid-gap: 50px;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
`;
