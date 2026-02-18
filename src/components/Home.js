import React from 'react';
import { Container, Row, Col, Image, Button, Card, Badge } from 'react-bootstrap';

export const Home = () => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #e9ecef 100%)',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        {/* Main Profile Card */}
                        <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '25px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
                            <Card.Body className="text-center">

                                {/* Profile Picture with custom ring */}
                                <div className="mb-4 d-inline-block position-relative">
                                    <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKmahtDGFKi5UOsZLuwGaPHC4bwYAY0uUjutTZLuQqz2167fW"
                                        roundedCircle
                                        style={{
                                            width: '180px',
                                            height: '180px',
                                            objectFit: 'cover',
                                            border: '6px solid #fff',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                        }}
                                    />
                                    <Badge pill bg="primary" className="position-absolute bottom-0 end-0 px-3 py-2 border border-2 border-white shadow-sm">
                                        PNC IT Student
                                    </Badge>
                                </div>

                                {/* Typography */}
                                <h1 className="display-4 fw-bold text-dark mb-2">Welcome to My Profile!</h1>
                                <p className="text-uppercase tracking-widest text-primary fw-bold mb-4" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
                                    Full-Stack Developer • Creative Problem Solver
                                </p>

                                <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: '600px', lineHeight: '1.8' }}>
                                    My career goal is to build scalable web applications that improve user
                                    experience and solve real-world problems.
                                </p>

                                {/* Modernized Buttons */}
                                <div className="d-flex justify-content-center gap-3 mb-4">
                                    <Button
                                        variant="dark"
                                        href="https://github.com/leigcsn-sys"
                                        target="_blank"
                                        className="rounded-pill px-4 py-2 shadow-sm fw-bold">
                                        GitHub
                                    </Button>
                                    <Button
                                        variant="primary"
                                        href="https://linkedin.com"
                                        target="_blank"
                                        className="rounded-pill px-4 py-2 shadow-sm fw-bold">
                                        LinkedIn
                                    </Button>
                                    <Button
                                        variant="info"
                                        href="https://twitter.com"
                                        target="_blank"
                                        className="rounded-pill px-4 py-2 shadow-sm fw-bold text-white">
                                        Twitter
                                    </Button>
                                </div>

                                {/* Bottom Tagline */}
                                <div className="pt-4 border-top">
                                    <small className="text-secondary fw-semibold">
                                        Based in Cabuyao, Laguna 📍
                                    </small>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};