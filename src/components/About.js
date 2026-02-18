import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export const About = () => (
    <Container className="py-5 mt-3">
        <Row className="justify-content-center">
            <Col lg={10}>
                {/* Main Header with a subtle background accent */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark">About Me</h2>
                    <div className="mx-auto bg-primary rounded" style={{ height: '4px', width: '60px' }}></div>
                </div>

                <Row className="align-items-stretch">
                    {/* Left Column: Bio */}
                    <Col md={7} className="mb-4">
                        <div className="h-100 p-4 bg-white shadow-sm rounded-4 border-start border-primary border-5">
                            <h4 className="fw-bold mb-3 text-primary">Background</h4>
                            <p className="lead fs-6 text-secondary">
                                I am a dedicated <strong>Information Technology student</strong> at
                                <span className="text-dark fw-bold"> Pamantasan ng Cabuyao</span>.
                                My focus is on mastering frontend architecture and building modern web solutions.
                            </p>
                            <p className="text-muted">
                                I find beauty in clean code and efficient design. When I'm away from the screen,
                                you’ll likely find me hiking or scouting for the next best coffee shop in the city.
                            </p>
                        </div>
                    </Col>

                    {/* Right Column: Educational Card */}
                    <Col md={5} className="mb-4">
                        <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                            <div className="p-1 bg-primary"></div> {/* Top accent bar */}
                            <Card.Body className="p-4 bg-light">
                                <h5 className="fw-bold mb-4">University & Identity</h5>

                                <div className="mb-3">
                                    <small className="text-uppercase text-primary fw-bold d-block mb-1">Institution</small>
                                    <p className="mb-0 fw-semibold">Pamantasan ng Cabuyao (PNC)</p>
                                    <small className="text-muted">Cabuyao City, Laguna</small>
                                </div>

                                <div className="mb-3">
                                    <small className="text-uppercase text-primary fw-bold d-block mb-1">Degree</small>
                                    <p className="mb-0 fw-semibold">BS in Information Technology</p>
                                </div>

                                <div className="pt-2">
                                    <Badge bg="info" className="me-2 p-2">#PNCian</Badge>
                                    <Badge bg="dark" className="p-2">#FutureDev</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Hobby Footer */}
                <div className="mt-4 p-3 text-center bg-white rounded-pill shadow-sm border">
                    <span className="me-3">☕ <strong>Coffee Enthusiast</strong></span>
                    <span className="text-muted">|</span>
                    <span className="ms-3">🥾 <strong>Nature Hiker</strong></span>
                </div>
            </Col>
        </Row>
    </Container>
);