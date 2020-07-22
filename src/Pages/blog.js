import React, { Component } from 'react';
import { Container, Media, Row, Col, ListGroup, Card } from 'react-bootstrap'



export default class Blog extends Component {
    render() {
        return (
            <Container style={{ padding: '100px 0 0 0' }}>
                <Row>
                    <Col md="9">
                        <Media className="mb-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet totam et quo nemo odio a natus aut provident, eius accusantium aperiam, saepe sequi 
                                corporis, architecto magni quisquam illum sint.</p>
                            </Media.Body>
                        </Media>

                        <Media className="mb-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet totam et quo nemo odio a natus aut provident, eius accusantium aperiam, saepe sequi 
                                corporis, architecto magni quisquam illum sint.</p>
                            </Media.Body>
                        </Media>

                        <Media className="mb-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet totam et quo nemo odio a natus aut provident, eius accusantium aperiam, saepe sequi 
                                corporis, architecto magni quisquam illum sint.</p>
                            </Media.Body>
                        </Media>

                        <Media className="mb-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet totam et quo nemo odio a natus aut provident, eius accusantium aperiam, saepe sequi 
                                corporis, architecto magni quisquam illum sint.</p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md="3">
                        <h5 className="text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet totam et quo nemo odio a natus aut provident, eius accusantium aperiam, saepe sequi 
                                corporis, architecto magni quisquam
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}