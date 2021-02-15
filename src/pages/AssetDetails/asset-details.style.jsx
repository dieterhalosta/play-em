import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 80vh;
  margin: 30px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  display: flex;
  background: linear-gradient(
    to right,
    transparent,
    80%,
    rgba(224, 97, 14, 0.25)
  );
`;

export const ImageContainer = styled.div`
  flex: 10%;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 90%;
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
  font-size: 3rem;
`;

export const TagLine = styled.span`
  place-items: center;
  text-align: justify;
  text-align-last: center;
  font-size: 1.5rem;
`;

export const SmallDetailsContainer = styled.div``;

export const ListOfDetails = styled.div`
  display: flex;
  justify-content: right;
`;

export const SmallDetails = styled.span`
  padding: 10px;
`;

export const ListOfGeneres = styled.div``;

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

export const ModalContainer = styled.div`
`;
