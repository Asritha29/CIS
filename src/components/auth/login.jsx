import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">

    <Card className="col-lg-5 mx-3 mt-1">
    <Card.Header className="text-center hlogin text-white"><h3>Login</h3></Card.Header>
    <Card.Body>
      <Form action="/login">
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2" htmlFor="email" className="llogin">Email</Form.Label>
          <Col sm="10">
            <Form.Control type="email" id="email" autoComplete="off" placeholder="example@email.com" name="email" />
          <br />
          </Col>
          <Form.Label column sm="2" htmlFor="password" className="llogin">Password</Form.Label>
<Col sm="10">
  <Form.Control type="password" id="password" autoComplete="off" aria-describedby="passwordHelpBlock" placeholder="Password" />
</Col>
<Form.Text id="passwordHelpBlock" muted>
  Your password must be 8-20 characters long, contain letters and numbers, special characters, and must not contain spaces, or emoji.
</Form.Text>


         
          <br />
          <br />
          <br />
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="btn3" type="submit">Login</Button> {/* Added type="submit" to the Button */}
          </Col>
        </Form.Group>
      </Form>
      <p style={{ textAlign: 'center', color: 'black' }}>Don't have an account? <Link to="/signup">Signup</Link></p>
    </Card.Body>
  </Card>
    </div>
);
}
export default Login;
