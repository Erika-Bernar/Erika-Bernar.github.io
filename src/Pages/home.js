import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';



export default class Home extends Component {
    render() {
        return (
        <>    
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">
                    <Card>
                        <Card.Img variant="top" 
                        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem fuga maxime maiores quasi dolorum 
                            ipsa ipsam perspiciatis deleniti delectus!
                            </Card.Text>
                            <Button variant="primary" >About team</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem fuga maxime maiores quasi dolorum 
                            ipsa ipsam perspiciatis deleniti delectus!
                            </Card.Text>
                            <Button variant="primary" >About team</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" 
                        src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem fuga maxime maiores quasi dolorum 
                            ipsa ipsam perspiciatis deleniti delectus!
                            </Card.Text>
                            <Button variant="primary" >About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </>    
        );
    }
}