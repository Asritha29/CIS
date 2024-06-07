import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
// import Court from '../assets/court6.JPJ';
import courtImage from '../assets/court6.jpeg';

import Header from './header/header'
import './home1.css'
const Home = () => {
    // const Court = require('../assets/court6.JPJ').default;
    return (
        <Container fluid>
            <Header />
           <Image src={courtImage} alt='img' className='image' fluid/>
        </Container>
    );
};

export default Home;
