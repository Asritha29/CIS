// header1.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import './header1.css';
import logo from '../../assets/logo.png';
import Header from './header';
function Header1() {
  return (
    <div>
    <div className="header1">
      <div className="left-card">
        <div style={{ textAlign: 'left', float:'left' }}>
          <img src={logo} alt="Logo" style={{ width: '100px' }} />
        </div>
        <h5 className='h5'>TELANGANA STATE WAQF TRIBUNAL, HYDERABAD SRI B. SURESH (CHAIRMAN)</h5>
        <p className='e'>तेलंगाना राज्य वक्फ ट्रिब्यूनल, हैदराबाद। श्री बी. सुरेश (अध्यक्ष) <br/>eCourtIS</p>
      </div>
      <div className="right-card">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <Header />
    </div>
  );
}

export default Header1;
