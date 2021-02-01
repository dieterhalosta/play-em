import React from 'react';
import {ReactComponent as Logo} from '../../logo.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.style';


const Header = () => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/categories'>
                CATEGORIES
            </OptionLink>
            <OptionLink to='/popular'>
                POPULAR
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
)

export default Header;