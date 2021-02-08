import React from "react";
import {
  ItemContainer,
  ImageContainer,
  DetailContainer,
  TitleContainer,
  TagLine,
  SmallDeatilsContainer,
  DescriptionContainer,
  ButtonContainer,
} from "./asset-details.style";
import CustomButton from "../../components/custom-button/custom-button.component";

const AssetDetails = () => {
  return (
    <ItemContainer>
      <DetailContainer>
        <TitleContainer>
            This is the title of the movie
            <TagLine>This is a small tag line</TagLine>    
        </TitleContainer>
        
        <SmallDeatilsContainer>
          Small details like release year and other little stuff
        </SmallDeatilsContainer>
        <DescriptionContainer>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </DescriptionContainer>
        <ButtonContainer>
          <CustomButton>Watch Trailer</CustomButton>
        </ButtonContainer>
      </DetailContainer>
      <ImageContainer />
    </ItemContainer>
  );
};

export default AssetDetails;
