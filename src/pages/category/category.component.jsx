import React, {useContext} from 'react'
import CategoryItem from '../../components/category-item/category-item.component.jsx'
import CategoryContext from '../../contexts/categories/category.context'

const CategoryPage = ({match}) => {
    const categories = useContext(CategoryContext)
    const category = categories[match.params.categoryId]
    const {title, items} = category

    return (
        <div className='category-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CategoryItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
        )
}

export default CategoryPage
