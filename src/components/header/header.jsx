// header.jsx
import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// import Header1 from './header1';
import './header.css';

const Header = () => {
  const placeholderRef = useRef(null);
  const HeaderRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (HeaderRef.current && placeholderRef.current) {
        const HeaderTop = placeholderRef.current.getBoundingClientRect().top;
        if (HeaderTop <= 0 && !isFixed) {
          setIsFixed(true);
        } else if (HeaderTop > 0 && isFixed) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  return (
    <div className='head1'>
      <div ref={placeholderRef} className="placeholder topbar"  >
      <div className={`header ${isFixed ? 'fixed' : ''}`} ref={HeaderRef}>
        <Navbar  className="topbar stroke" >
          <Container className='stroke'>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
        <div className="dropdown">
                <NavDropdown title="Services" id="basic-nav-dropdown" className='dropdown'>
                  <div className="dropitems" href="#action/3.2">
                  <NavDropdown.Item  href="#action/3.2">
                    <Nav.Link href="/case">Case</Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link href="/caseStudy">Case Study</Nav.Link>
                  </NavDropdown.Item >
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link href="/caseHistory">Case History</Nav.Link>
                  </NavDropdown.Item>
                  </div>
                  
                </NavDropdown>
                </div>
                <Nav.Link href="/judgement">Judgement</Nav.Link>
                <Nav.Link href="/act">Act</Nav.Link>
                <Nav.Link href="/notifications">Notifications</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </div>
    </div>
  );
};

export default Header;


