import React from "react";
import { ModalContainer, VideoContainer, CloseButton } from "./modal.style";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ onClose, show, children }) => {
  return (
    <ModalContainer show={show}>
      <VideoContainer>
        <CloseButton onClick={onClose}>
          <FaWindowClose />
        </CloseButton>
        {children}
      </VideoContainer>
    </ModalContainer>
  );
};

export default Modal;
