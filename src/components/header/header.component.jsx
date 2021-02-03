import React from 'react';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.style';
import CustomButton from '../custom-button/custom-button.component';
import {FaYoutube} from 'react-icons/fa'

const Header = () => (
    <HeaderContainer>
        <LogoContainer to="/">
            <FaYoutube size='50px' />
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