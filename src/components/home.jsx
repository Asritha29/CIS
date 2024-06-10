import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
// import Court from '../assets/court6.JPJ';
import courtImage from '../assets/court6.jpeg';

import Header1 from './header/header1'
import './home1.css'
const Home = () => {
    // const Court = require('../assets/court6.JPJ').default;
    return (
        <Container fluid>
            <Header1 />
           <Image src={courtImage} alt='img' className='image' fluid/>
        </Container>
    );
};

export default Home;
