import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import {CategoryPreviewContainer, TitleContainer, PreviewContainer} from './category-preview.style'

const CategoryPreview = ({title, items, history, match, routeName}) =>{ 
    
    const goToCaterogy = () => {
        //history.push(`${match.path}/${routeName}`)
        console.log(items)
    }

    return(
       
       <CategoryPreviewContainer>
           <TitleContainer onClick={goToCaterogy}>
               {title.toUpperCase()}
           </TitleContainer>
            <PreviewContainer>
                {items.filter((item, idx) => idx < 4).map(item => (
                    <CategoryItem key={item.id} item={item}/>
                ))}
            </PreviewContainer>


       </CategoryPreviewContainer>
)}

export default CategoryPreview