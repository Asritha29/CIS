import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import Court from '../assets/court6.JPJ';
import courtImage from '../assets/court6.jpeg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import Header1 from './header/header1'
import './home1.css'
const Home = () => {
    // const Court = require('../assets/court6.JPJ').default;
    return (
       <div>
        <Header1 />
        {/* <Card  style={{height:'570px'}} className='homecard1'>
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
    </Card> */}
        <br />
        
        {/* <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup> */}
       </div>
    );
};

export default Home;
