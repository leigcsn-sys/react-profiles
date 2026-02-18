import React, { useState } from 'react';
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <Container className="py-5">
                <Alert variant="success" className="text-center p-5 shadow-lg border-0" style={{ borderRadius: '20px' }}>
                    <div className="display-1 mb-4">✉️</div>
                    <Alert.Heading className="fw-bold">Thank you, {formData.name}!</Alert.Heading>
                    <p className="mb-4">Your message has been sent successfully. I'll get back to you soon.</p>
                    <hr />
                    <div className="text-start bg-white p-4 rounded-4 border mx-auto" style={{ maxWidth: '500px' }}>
                        <p className="mb-1 text-muted small uppercase fw-bold">YOUR SUBMISSION:</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p className="mb-0"><strong>Message:</strong> {formData.message}</p>
                    </div>
                    <Button variant="primary" className="mt-4 px-5 rounded-pill" onClick={() => setSubmitted(false)}>
                        Send Another Message
                    </Button>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={10}>
                    <Card className="shadow-lg border-0 overflow-hidden" style={{ borderRadius: '20px' }}>
                        <Row className="g-0">
                            {/* Left Side: Contact Information */}
                            <Col md={5} className="bg-primary text-white p-5 d-flex flex-column justify-content-center">
                                <h3 className="fw-bold mb-4">Get in Touch</h3>
                                <p className="opacity-75 mb-5">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                                </p>

                                <div className="mb-4 d-flex align-items-center">
                                    <div className="fs-3 me-3">📍</div>
                                    <div>
                                        <div className="fw-bold">Location</div>
                                        <small className="opacity-75">Cabuyao City, Laguna</small>
                                    </div>
                                </div>

                                <div className="mb-4 d-flex align-items-center">
                                    <div className="fs-3 me-3">🏫</div>
                                    <div>
                                        <div className="fw-bold">University</div>
                                        <small className="opacity-75">Pamantasan ng Cabuyao</small>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="fs-3 me-3">📧</div>
                                    <div>
                                        <div className="fw-bold">Email</div>
                                        <small className="opacity-75">leigacusana@gmail.com</small>
                                    </div>
                                </div>
                            </Col>

                            {/* Right Side: The Form */}
                            <Col md={7} className="bg-white p-5">
                                <h2 className="mb-4 fw-bold">Send a Message</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="small fw-bold text-muted">FULL NAME</Form.Label>
                                        <Form.Control
                                            type="text" name="name" required
                                            onChange={handleChange} placeholder="John Doe"
                                            className="bg-light border-0 p-3"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="small fw-bold text-muted">EMAIL ADDRESS</Form.Label>
                                        <Form.Control
                                            type="email" name="email" required
                                            onChange={handleChange} placeholder="name@example.com"
                                            className="bg-light border-0 p-3"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label className="small fw-bold text-muted">MESSAGE</Form.Label>
                                        <Form.Control
                                            as="textarea" name="message" rows={4} required
                                            onChange={handleChange} placeholder="What's on your mind?"
                                            className="bg-light border-0 p-3"
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 p-3 fw-bold rounded-pill shadow-sm">
                                        Send Message
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};