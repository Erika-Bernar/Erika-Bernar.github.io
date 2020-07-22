import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'



export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px', padding: '100px 0 0 0' }}>
                <h2 className="text-center">Contact us</h2>
                <Form> 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placegolder="Enter email"/>
                        <Form.Text>We'll never share your email with anyone else</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                

                
            </Container>
        );
    }
}