import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// Import your components
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      {/* Modern Glassmorphism Navbar */}
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          padding: '15px 0'
        }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold fs-4 text-primary"
            style={{ letterSpacing: '-1px' }}
          >
            REACT<span className="text-dark">Portfolio</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="px-3 fw-semibold text-dark">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3 fw-semibold text-dark">About</Nav.Link>
              <Nav.Link as={Link} to="/skills" className="px-3 fw-semibold text-dark">Skills</Nav.Link>

              {/* Specialized Contact Button */}
              <Nav.Link as={Link} to="/contact" className="ms-lg-3">
                <Button
                  variant="primary"
                  className="rounded-pill px-4 shadow-sm fw-bold"
                  style={{ transition: '0.3s' }}
                >
                  Let's Talk
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <div style={{ paddingTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;