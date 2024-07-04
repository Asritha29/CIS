import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';
const Header = () => {
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        if (headerTop <= 0 && !isFixed) {
          setIsFixed(true);
        } else if (headerTop > 0 && isFixed) {
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
    <div className={`head1 ${isFixed ? 'fixed' : ''}`} ref={headerRef}>
      <Navbar className="topbar stroke">
        <Container className='stroke'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown" className='dropdown'>
                <NavDropdown.Item href="/case">Case</NavDropdown.Item>
                <NavDropdown.Item href="/petitioner">Case Study</NavDropdown.Item>
                <NavDropdown.Item href="/caseHistory">Case History</NavDropdown.Item>
              </NavDropdown>
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
  );
};

export default Header;



