import React, {useContext} from 'react'
import CategoryPreview from '../preview-category/preview-category.component'
import CategoryContext from '../../contexts/categories/category.context'

const CategoryOverview = () => {
    const categoryMap = useContext(CategoryContext);
    const categories = Object.keys(categoryMap).map(key => categoryMap[key])

    return (
        <div className='category-overview'>
            {categories.map(({id, ...otherCategoryProps}) => (
                <CategoryPreview key={id} {...otherCategoryProps}/>
            ))}
        </div>
        )
}

export default CategoryOverview