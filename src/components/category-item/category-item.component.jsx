import React from 'react'
import {CategoryItemContainer, BackgroundImage, NameContainer, HiddenContainer, DetailsContainer} from './category-item.style'
import CustomButton from '../custom-button/custom-button.component'

const CategoryItem = ({item}) => {

    const {name, imageUrl} = item;

    return (


        <CategoryItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}>
            <HiddenContainer className='details'>
                <DetailsContainer >
                    <NameContainer>{name}</NameContainer>
                    <CustomButton>Click here</CustomButton>
                </DetailsContainer>
            </HiddenContainer>
                
            </BackgroundImage>
            
        </CategoryItemContainer>
        )
}

export default CategoryItem