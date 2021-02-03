import React, {useState} from 'react'
import {CarouselData} from '../../Silder/SliderDataTest'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'


const ImageSlider = ({slides}) => {
    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowCircleRight className='right-arrow' onClick={nextSlide}/>
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} keys ={index}>
                        {index === current && (<img src={slide.image} alt="test image" className='image'/>)}
                    </div>
                    )
            })}
        </section>
    )
}

export default ImageSlider
