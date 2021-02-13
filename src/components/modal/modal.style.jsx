import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${(props) => props.show ? 'block' : 'none'};
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const VideoContainer = styled.section`
  position: fixed;
  background: #e0610e;
  width: 60%;
  height: 50vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
position: absolute;
background: transparent;
border: none;
color: #E0610E
top: -2px;
right: -2px;
font-size: 2rem;
`;
