import React, { useState} from 'react'
import './carousel.style.css'
import {CarouselData} from './SliderData'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'


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
        <div className='carousel'>
            <div className='carouselInner' style={{ backgroundImage: `url(${CarouselData[current].image})`}} >
                <div className='left' onClick={moveLeft}>
                   <FaArrowLeft style={{ fontSize: 30 }}/> 
                </div>
                <div className='center'>
                    <h1>{CarouselData[current].title}</h1>
                    <p>{CarouselData[current].subtitle}</p>
                </div>
                <div className='right' onClick={moveRight}>
                    <FaArrowRight style={{ fontSize: 30 }}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel