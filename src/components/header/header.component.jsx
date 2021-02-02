import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo3.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.style';
import CustomButton from '../custom-button/custom-button.component';

const Header = () => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/categories'>
                <CustomButton>
                    CATEGORIES
                </CustomButton>
            </OptionLink>
            <OptionLink to='/popular'>
                <CustomButton>
                    POPULAR
                </CustomButton>
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
)

export default Header;