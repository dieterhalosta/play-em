import React from 'react'

const CategoryPreview = ({title, items}) => {
    return (
        <div className='category-preview'>
            <h1 classname ='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx <4).map(item => (
                        <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default CategoryPreview