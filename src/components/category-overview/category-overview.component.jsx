import React, {useContext} from 'react'
import CategoryPreview from '../preview-category/preview-category.component'
import CategoryContext from '../../contexts/categories/category.context'
import {CategoryOverviewContainer} from './category-overview.style'

const CategoryOverview = () => {
    const categoryMap = useContext(CategoryContext);
    const categories = Object.keys(categoryMap).map(key => categoryMap[key])

    return (
        <CategoryOverviewContainer>
            {categories.map(({id, ...otherCategoryProps}) => (
                <CategoryPreview key={id} {...otherCategoryProps}/>
            ))}
        </CategoryOverviewContainer>
        )
}

export default CategoryOverview