// eslint-disable-next-line no-unused-vars
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">

    <Card className="col-lg-5 mx-3 mt-1">
    <Card.Header className="text-center hlogin text-white"><h3>Signup</h3></Card.Header>
    <Card.Body>
      <form action="/login">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2" htmlFor="name">Name</Form.Label>
          <Col sm="10">
            <Form.Control type="text" id="name" placeholder="Name" />
          <br />
          </Col>
          <Form.Label column sm="2" htmlFor="username">Username</Form.Label>
          <Col sm="10">
            <Form.Control type="text" id="username" placeholder="Username" />
          <br />
          </Col>
          <Form.Label column sm="2" htmlFor="password">Password</Form.Label>
          <Col sm="10">
            <Form.Control type="password" id="password" aria-describedby="passwordHelpBlock" placeholder="Password" />
          </Col>
          <Form.Text id="passwordHelpBlock" muted>
       Your password must be 8-20 characters long, contain letters and numbers, special characters, and must not contain spaces, or emoji.
          </Form.Text>
          
          <Form.Label column sm='2' htmlFor="role"> <br/>Role</Form.Label>
          <Col sm="10">
          <br />
         <Form.Select >
          <option>Select Role</option>
          <option>Admin</option>
          <option>HR</option>
          <option>User</option>
         </Form.Select>
          </Col>

          <br />
          <br />
          <Col sm={{ span: 10, offset: 2 }}>
          <br /> 
            <Button className="btn3" type="submit">Signup</Button> 
          </Col>
        </Form.Group>
      </form>
      <p style={{ textAlign: 'center', color: 'black' }}>{'Already have an account?'}<Link to="/">Signin</Link></p>
    </Card.Body>
  </Card>
    </div>
);
}

export default Signup;