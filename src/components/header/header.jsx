import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';
import Header1 from './header1';
import logo from '../../assets/logo.png';
import department from '../../assets/department.jpg';
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
      
  <div className="header1">
        <div className="left-card">
          <div style={{ textAlign: 'left', float: 'left' }}>
            <img src={logo} alt="Logo" style={{ width: '100px', height:'90px'}} />
          </div>
          <div className="left-card1">
          <h5 className='h5'>TELANGANA STATE WAQF TRIBUNAL, HYDERABAD </h5><br />
          <h6 className='e'>तेलंगाना राज्य वक्फ ट्रिब्यूनल, हैदराबाद <br/>eCourtIS</h6>
          </div>
        </div>
        <div className="right-card">
        <div style={{ textAlign: 'right', float: 'right' }}>
            <img src={department} alt="Logo" style={{ width: '100px' }} />
          </div>
          <h2></h2>
          <p></p>
        </div>
      </div>
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



