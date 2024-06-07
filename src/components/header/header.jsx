import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Header1 from './header1'

import './header.css';

const Header = () => {
  return (
    <div>
      <Header1 />
    <div className='head'>
    <Navbar bg="dark"  className="bg-body-tertiary topbar stroke">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Nav.Link href="/case">Case</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Nav.Link href="/caseStudy">Case Study</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Nav.Link href="/caseHistory">Case History</Nav.Link>
            </NavDropdown.Item>
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
  </div>
  );
};

export default Header;
