import styled from "styled-components";
import MyImage from "../../assets/myImageTest.jpg";

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
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  background-image: url(${MyImage});
  background-size: cover;
  width: 80%;
  height: 90%;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  border-radius:10px;
    box-shadow: 1px 8px #434046;
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

export const SmallDeatilsContainer = styled.div``;

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
