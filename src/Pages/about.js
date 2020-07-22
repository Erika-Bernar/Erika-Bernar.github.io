import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col} from 'react-bootstrap';



export default class About extends Component {
    render() {
        return (
            <Container style={{ padding: '100px 0 0 0' }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="w-100" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rem veniam necessitatibus aliquam incidunt provident. Sit perferendis ipsum error beatae? </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img className="w-100" src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rem veniam necessitatibus aliquam incidunt provident. Sit perferendis ipsum error beatae? </p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rem veniam necessitatibus aliquam incidunt provident. Sit perferendis ipsum error beatae? </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img className="w-100"  src="https://i.pinimg.com/originals/df/c7/ce/dfc7ce51d62017d5bcec72972f1c97e0.jpg" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rem veniam necessitatibus aliquam incidunt provident. Sit perferendis ipsum error beatae? </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img className="w-100"  src="https://www.improgrammer.net/wp-content/uploads/2018/10/Most-Popular-javascrit-Frameworks-1.jpg" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rem veniam necessitatibus aliquam incidunt provident. Sit perferendis ipsum error beatae? </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img className="w-100"  src="https://envisionitagency.com/uploads/2018/04/frameworks.png"  />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rem veniam necessitatibus aliquam incidunt provident. Sit perferendis ipsum error beatae? </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}