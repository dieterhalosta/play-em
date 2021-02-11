import styled, {css} from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: black;
  i {
    font-size: 2vw;
  }
`

export const SliderItem = styled.div`
  min-width: 100%;
  transition: 0.5s;
  transform: ${props => `translateX(${props.current}%)` }
`

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
`

const buttonStyles = css`
  position: absolute;
  margin-top: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 80%;
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
    cursor: pointer;
  }
`

export const LeftButton = styled.button`
  ${buttonStyles}
  left: 0
`

export const RightButton = styled.button`
  ${buttonStyles}
  right: 0
`