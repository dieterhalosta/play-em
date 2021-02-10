import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.style";
import CustomButton from "../custom-button/custom-button.component";
import { FaYoutube } from "react-icons/fa";
import MenuContext from '../../contexts/menu/menu.context';

const renderHeader = (menuItems) => {
  return menuItems.map(item => {
    return <OptionLink key={item.id} to={item.route}><CustomButton>{item.lable}</CustomButton></OptionLink>
  })
}

const Header = () => {
  return(
  <HeaderContainer>
    <LogoContainer to='/'>
      <FaYoutube size='50px' />
    </LogoContainer>
    <OptionsContainer>
      <MenuContext.Consumer>
        {menuItems => renderHeader(menuItems)}
      </MenuContext.Consumer>
    </OptionsContainer>
  </HeaderContainer>
)};

export default Header;
