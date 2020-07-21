import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import abyssImg from '../assets/abyss.jpg';
import waterfallImg from '../assets/waterfall.jpg';





export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ abyssImg }
                        alt="photo"
                    />
                    <Carousel.Caption>
                        <h3>Abyss photo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quae!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ waterfallImg }
                        alt="photo"
                    />
                    <Carousel.Caption>
                        <h3>Waterfall Photo </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quae!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ abyssImg }
                        alt="photo"
                    />
                    <Carousel.Caption>
                        <h3>Abyss photo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quae!</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        ); 
    }
}