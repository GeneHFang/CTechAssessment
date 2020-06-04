import React from 'react';
import CarouselImage from './CarouselImage';
import hikerguy from '../assets/hikerguy.jpg';
import hikerdude from '../assets/hikerdude.jpg';
import Carousel from 'react-elastic-carousel';


export default class CarouselContainer extends React.Component {
    state = {
            carouselNum: 1,
            images:[]
        }

    componentDidMount = () =>{
        let imgs = [];

        //substitute fetching images from somewhere
        for (let i = 0; i < 12 ; i++){
            i % 2 === 0 
                ? imgs.push(hikerguy)
                : imgs.push(hikerdude)
        }

        
        this.setState({
            images: imgs
        });

    }

    renderImages = () =>{
        return this.state.images.map(imgURL => {
            return <CarouselImage img={imgURL}/>
        })
    }

    render = () => {
        return (
            <Carousel itemsToShow={4}>
                { this.state.images 
                    ? 
                  this.renderImages()
                    :
                    null}
            </Carousel>
        )
    }
}