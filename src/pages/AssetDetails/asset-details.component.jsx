import React, { useState } from "react";
import AssetDetailsStore, {
  AssetContext,
} from "../../contexts/assetDetails/asset-details.context";
import {
  ItemContainer,
  ImageContainer,
  DetailContainer,
  TitleContainer,
  Title,
  TagLine,
  SmallDetailsContainer,
  ListOfDetails,
  ListOfGeneres,
  SmallDetails,
  DescriptionContainer,
  ButtonContainer,
  Image,
  ModalContainer,
} from "./asset-details.style";
import CustomButton from "../../components/custom-button/custom-button.component";
import Modal from "../../components/modal/modal.component";
import ReactPlayer from "react-player";

const renderAssetDetails = (assetDetails, assetVideos, showModal) => {
  const genres =
    assetDetails &&
    assetDetails.genres &&
    assetDetails.genres.map((item) => (
      <SmallDetails key={item.id}>{item.name}</SmallDetails>
    ));

  return (
    <ItemContainer>
      <DetailContainer>
        <TitleContainer>
          <Title>{assetDetails.title}</Title>
          <TagLine>{assetDetails.tagline}</TagLine>
        </TitleContainer>
        <SmallDetailsContainer>
          <ListOfDetails>
            <SmallDetails>{assetDetails.vote_average}</SmallDetails>
            <SmallDetails>{assetDetails.release_date}</SmallDetails>
            <SmallDetails>{assetDetails.original_language}</SmallDetails>
          </ListOfDetails>
          <ListOfGeneres>{genres}</ListOfGeneres>
        </SmallDetailsContainer>
        <DescriptionContainer>{assetDetails.overview}</DescriptionContainer>
        <ButtonContainer>
          {assetVideos && assetVideos.length > 0 ? (
            <CustomButton onClick={showModal}>Watch Trailer</CustomButton>
          ) : (
            <div>There was not trailer to be found</div>
          )}
        </ButtonContainer>
      </DetailContainer>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${assetDetails.poster_path}`}
          alt='not found'
        />
      </ImageContainer>
    </ItemContainer>
  );
};

const AssetDetails = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { id } = props.match.params;

  const show = () => {
    setShowModal(true);
  };

  const hide = () => {
    setShowModal(false);
  };

  return (
    <AssetDetailsStore assetId={id}>
      <AssetContext.Consumer>
        {({ assetDetails, assetVideos }) => {
          return (
            <React.Fragment>
              <ItemContainer>
                {renderAssetDetails(assetDetails, assetVideos, show)}
                {assetVideos &&
                assetVideos.length > 0 &&
                assetVideos.find((video) => video.type === "Trailer") ? (
                  <ModalContainer>
                    <Modal show={showModal} close={hide}>
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${
                          assetVideos.find((item) => item.type === "Trailer")
                            .key
                        }`}
                        width='100%'
                        height='100%'
                        playing={showModal}
                        controls={true}
                      />
                    </Modal>
                  </ModalContainer>
                ) : null}
              </ItemContainer>
            </React.Fragment>
          );
        }}
      </AssetContext.Consumer>
    </AssetDetailsStore>
  );
};

export default AssetDetails;
