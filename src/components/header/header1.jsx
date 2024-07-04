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
          <div style={{ textAlign: 'left', float: 'left' }}>
            <img src={logo} alt="Logo" style={{ width: '100px' }} />
          </div>
          <h5 className='h5'>TELANGANA STATE WAQF TRIBUNAL, HYDERABAD </h5>
          <p className='e'>तेलंगाना राज्य वक्फ ट्रिब्यूनल, हैदराबाद <br/>eCourtIS</p>
        </div>
        <div className="right-card">
          <h2></h2>
          <p></p>
        </div>
      </div>
      <div style={{ marginTop: '160px' }}> {/* Adjust this margin to ensure content doesn't overlap */}

      </div>
    </div>
  );
}

export default Header1;

