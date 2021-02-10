import React, { useState } from "react";
import {
  ItemContainer,
  ImageContainer,
  DetailContainer,
  TitleContainer,
  Title,
  TagLine,
  SmallDeatilsContainer,
  ListOfDetails,
  ListOfGeneres,
  SmallDetails,
  DescriptionContainer,
  ButtonContainer,
  Image,
  ModalContainer,
} from "./asset-details.style";
import CustomButton from "../../components/custom-button/custom-button.component";
import ReactPlayer from "react-player";
import Modal from "react-modal";

const AssetDetails = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!isOpen);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ItemContainer>
      <DetailContainer>
        <TitleContainer>
          <Title>This is the title of the movie</Title>
          <TagLine>This is a small tag line</TagLine>
        </TitleContainer>

        <SmallDeatilsContainer>
          <ListOfDetails>
            <SmallDetails>9.8</SmallDetails>
            <SmallDetails>2020</SmallDetails>
            <SmallDetails>EN</SmallDetails>
          </ListOfDetails>
          <ListOfGeneres>
            <SmallDetails>Action</SmallDetails>
            <SmallDetails>Drama</SmallDetails>
            <SmallDetails>Thriller</SmallDetails>
            <SmallDetails>Sci-Fi</SmallDetails>
            <SmallDetails>Murder</SmallDetails>
          </ListOfGeneres>
        </SmallDeatilsContainer>
        <DescriptionContainer>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </DescriptionContainer>
        <ButtonContainer>
          <CustomButton onClick={() => openModal()}>Watch Trailer</CustomButton>
        </ButtonContainer>
      </DetailContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <ModalContainer>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel='Example'
        >
          <ReactPlayer
            url='https://youtu.be/FuaQ1QhJOkc'
            width='100%'
            height='100%'
          />
        </Modal>
      </ModalContainer>
    </ItemContainer>
  );
};

export default AssetDetails;
