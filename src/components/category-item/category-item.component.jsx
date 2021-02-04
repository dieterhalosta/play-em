import React from 'react'
import {CategoryItemContainer, BackgroundImage, CategoryFooterContainer, NameContainer, PriceContainer} from './category-item.style'

const CategoryItem = ({item}) => {

    const {name, price, imageUrl} = item;

    return (


        <CategoryItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CategoryFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CategoryFooterContainer>
        </CategoryItemContainer>
        )
}

export default CategoryItem