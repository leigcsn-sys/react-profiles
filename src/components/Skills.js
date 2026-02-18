import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

export const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript"],
            icon: "💻",
            color: "#0d6efd"
        },
        {
            title: "Programming",
            skills: ["Java", "Python", "C++"],
            icon: "☕",
            color: "#dc3545"
        },
        {
            title: "Backend & DB",
            skills: ["Node.js", "SQL", "PHP"],
            icon: "🛠️",
            color: "#198754"
        },
        {
            title: "IT Essentials",
            skills: ["Networking", "Hardware", "OS"],
            icon: "🎓",
            color: "#6f42c1"
        }
    ];

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold display-6 text-dark">My Skills</h2>
                <p className="text-muted">Core technologies I am learning at Pamantasan ng Cabuyao</p>
            </div>

            {/* Grid for 4 categories */}
            <Row className="g-4">
                {skillCategories.map((cat, idx) => (
                    <Col key={idx} xs={12} sm={6} lg={3}>
                        <Card className="h-100 border-0 shadow-sm">
                            {/* Color accent bar */}
                            <div style={{ height: '5px', backgroundColor: cat.color, borderRadius: '15px 15px 0 0' }}></div>

                            <Card.Body className="p-4">
                                <div className="fs-1 mb-2 text-center">{cat.icon}</div>
                                <Card.Title className="fw-bold mb-3 text-center">{cat.title}</Card.Title>

                                {/* Simple Bulleted List */}
                                <ul className="list-unstyled mb-0">
                                    {cat.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="mb-2 d-flex align-items-center">
                                            <span style={{ color: cat.color, marginRight: '10px' }}>•</span>
                                            <span className="fw-semibold text-secondary">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="mt-5 p-4 bg-white border rounded shadow-sm text-center">
                <h5 className="fw-bold mb-0">
                    🚀 Currently exploring: <span className="text-primary">React.js & Cloud Computing</span>
                </h5>
            </div>
        </Container>
    );
};