import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Carousel = ({content}) => (
    <Slider>
        {content.map((article, index) => <div key={index}>
        <h2>{article.title}</h2>
        <div>{article.description}</div>
        </div>)}
    </Slider>
)

export default Carousel;