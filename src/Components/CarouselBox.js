import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';






export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        height={700}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="photo"
                    />
                    <Carousel.Caption>
                        <h3>Abyss photo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quae!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        height={700}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="photo"
                    />
                    <Carousel.Caption>
                        <h3>Waterfall Photo </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quae!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        height={700}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2915997/pexels-photo-2915997.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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