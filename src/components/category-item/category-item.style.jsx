import styled from "styled-components";

export const CategoryItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .details {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const HiddenContainer = styled.div`
  display: none;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: absolute;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center;
  text-align: justify;
  text-align-last: center;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const NameContainer = styled.span`
  font-size: 3rem;
  width: 100%;
`;
