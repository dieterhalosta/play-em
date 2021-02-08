import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 80vh;
  margin: 30px;
  display: flex;
  align-items: center;
`;
export const ImageContainer = styled.div`
  flex: 10%;
  width: 50%;
  height: 100%;
  background: papayawhip;
  background-size: cover;
  background-position: center;
`;
export const DetailContainer = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
place-items: center;
text-align: justify;
text-align-last: center;
font-size: 3rem;`
export const TagLine = styled.span`
  place-items: center;
  text-align: justify;
  text-align-last: center;
  font-size: 1.5rem;
`;
export const SmallDeatilsContainer = styled.div``;
export const DescriptionContainer = styled.div`
padding-right: 10px;
text-align: justify;
  font-size: 1.5rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
