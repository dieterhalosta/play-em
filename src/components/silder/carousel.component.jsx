import React, { useState} from 'react'
import {CarouselData} from './SliderData'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import {CarouselContainer, CarouselInner, Arrows, CenterContent, TitleBox} from './carousel.style'
import CustomButton from '../custom-button/custom-button.component'

const Carousel = () => {

    const [current, setCurrent] = useState(0);
    const lenght = CarouselData.length;

    const moveLeft = () => {
        setCurrent(current === 0 ? lenght - 1 : current -1)
    }

    const moveRight = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)

    }

    return(
        <CarouselContainer>
        
            <CarouselInner style={{ backgroundImage: `url(${CarouselData[current].image})`}} >
                <Arrows onClick={moveLeft}>
                    <FaArrowLeft style={{ fontSize: 30 }}/> 
                </Arrows>
                <CenterContent>
                    <TitleBox>{CarouselData[current].title}</TitleBox>
                    <CustomButton>Click here for more details</CustomButton>
                </CenterContent>
                <Arrows onClick={moveRight}>
                    <FaArrowRight style={{ fontSize: 30 }}/>
                </Arrows>
            </CarouselInner>
     
        </CarouselContainer>
    )
}

export default Carousel