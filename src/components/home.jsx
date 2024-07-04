import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// import Court from '../assets/court6.JPJ';
import courtImage from '../assets/court6.jpeg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from './header/footer';

import Header from './header/header'
import './home1.css'
const Home = () => {
    // const Court = require('../assets/court6.JPJ').default;
    return (
       <div>
        <Header />
        <Card  style={{height:'570px'}} className='homecard1'>
      <Card.Body>
      <Card.Img  src={courtImage} style={{height:'500px'}} />
      <Card.Text className='news1'>
      
      <div className="text-xl text-black font-bold ">
                LATEST NEWS
            </div>
            <div className="items-center ml-3">
                <a className="text-black font font-semibold">Release of coffe table e-book on digital transformation in Indian Judiciary,2023</a>
            </div>
          </Card.Text>
      </Card.Body>
    </Card>
        <br />
        
        <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>ABOUT CITY SMALL CAUSE COURTS </Card.Title>
          <Card.Text>
          The Unit of City Small Causes Court, Hyderabad was established in the year 1950 and comprises of 10 number of Courts, i.e., 2 District Courts, 1 Senior Civil Judge Court and 7 Junior Civil Judge Courts (05 in Hyderabad location and 02 in Secunderabad location). Sri Hon'ble Akthar Hussian Khan, was the first District and Sessions Judge. 
          The following are the list of District and Sessions Judges who chaired as the Hon'ble Chief Judges in the Unit of City Small Causes Court.
<br />
          <Button variant="outline-primary" >Read more</Button>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>Honourable Administrative Judges </Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <Footer />
       </div>
    );
};

export default Home;
