import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// import Court from '../assets/court6.JPJ';
import courtImage from '../assets/court6.jpeg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from './header/footer';
import Chairman  from  '../assets/chairman.jpg';
import Chairman1 from '../assets/administrative.jpeg';
import Chairman2 from '../assets/ChiefJudge.png'
import Header from './header/header'
import './home1.css'
const Home = () => {
    // const Court = require('../assets/court6.JPJ').default;
    return (
       <div>
        <Header />
        <Card  style={{height:'570px', border: 'none'}} className='homecard1'>
      <Card.Body>
      <Card.Img  src={courtImage} style={{height:'500px'}} />
      <Card.Text className='news1'>
      
      <div className="a2">
                LATEST NEWS
            </div>
            <div className="items-center ml-3">
                <a className="a1">Release of coffe table e-book on digital transformation in Indian Judiciary,2023</a>
            </div>
          </Card.Text>
      </Card.Body>
    </Card>
        <br />
        
        <CardGroup>
      <Card className='about1'>
        <Card.Body>
          <Card.Title style={{textAlign:'left',marginLeft:'0px', marginTop:'5px'}}>ABOUT CITY SMALL CAUSE COURTS </Card.Title>
          <Card.Text style={{textAlign:'justify'}}>
          The Unit of City Small Causes Court, Hyderabad was established in the year 1950 and comprises of 10 number of Courts, i.e., 2 District Courts, 1 Senior Civil Judge Court and 7 Junior Civil Judge Courts (05 in Hyderabad location and 02 in Secunderabad location). Sri Hon'ble Akthar Hussian Khan, was the first District and Sessions Judge. 
          The following are the list of District and Sessions Judges who chaired as the Hon'ble Chief Judges in the Unit of City Small Causes Court.
<br />
          <Button  className='btn2' >Read more</Button>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card style={{ border: 'none', width: '40%' }}>
        <Card.Body>
          <Card.Title className='title1'>Honourable Administrative Judges</Card.Title>
          <Card.Text>
            {/* You can add some text here if needed */}
          </Card.Text>
        </Card.Body>
        <Card className='judges'>
          <Card.Img variant='left' src={Chairman} className='imagejudges' /> 
          <Card.Title style={{display:'flex' }}>The Chief Justice</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card>
        <Card className='judges'>
        <Card.Img variant='left' src={Chairman1} className='imagejudges' /> 
        </Card>
        <Card className='judges'>
        <Card.Img variant='left' src={Chairman2} className='imagejudges' /> 
        </Card>
      </Card>
    </CardGroup>
    <Footer />
       </div>
    );
};

export default Home;
