import React from "react";
import { ModalContainer, VideoContainer, CloseButton } from "./modal.style";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ close, visible, children }) => {
  return (
    <ModalContainer visible={visible}>
      <VideoContainer>
        <CloseButton onClick={close}>
          <FaWindowClose />
        </CloseButton>
        {children}
      </VideoContainer>
    </ModalContainer>
  );
};

export default Modal;
