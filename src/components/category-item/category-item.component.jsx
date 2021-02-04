import React from 'react'


const CategoryItem = ({item}) => {

    const {name, price, imageUrl} = item;

    return (
        <div className='category-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='category-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

        </div>
        )
}

export default CategoryItem