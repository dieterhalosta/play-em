import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import {CategoryPreviewContainer, TitleContainer, PreviewContainer} from './preview-category.style'
const CategoryPreview = ({title, items, history, match, routeName}) => (
       
       <CategoryPreviewContainer>
           <TitleContainer onClick={() => history.push(`${match.path}`)}>
               {title.toUpperCase()}
           </TitleContainer>
            <PreviewContainer>
                {items.filter((item, idx) => idx < 4).map(item => (
                    <CategoryItem key={item.id} item={item}/>
                ))}
            </PreviewContainer>


       </CategoryPreviewContainer>
)

export default CategoryPreview