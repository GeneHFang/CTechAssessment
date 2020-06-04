import React from 'react';
import '../css/CarouselImage.css';


const CarouselImage = (props) => {

    return (
        <img className="image" src={props.img} alt="hiker guy" width="220px" height="135px"/>
    )
}


export default CarouselImage;