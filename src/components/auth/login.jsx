import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">

    <Card className="col-lg-5 mx-3 mt-1">
    <Card.Header className="text-center bg-primary text-white"><h4>Login</h4></Card.Header>
    <Card.Body>
      <form action="/login">
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2" htmlFor="email">Email</Form.Label>
          <Col sm="10">
            <Form.Control type="email" id="email" autoComplete="off" placeholder="example@email.com" name="email" />
          <br />
          </Col>
          <Form.Label column sm="2" htmlFor="password">Password</Form.Label>
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
            <Button variant="primary" type="submit">Login</Button> {/* Added type="submit" to the Button */}
          </Col>
        </Form.Group>
      </form>
          <p style={{ textAlign: 'center', color: 'black' }}>{'Don\'t have an account?'}<a href="./signup">Signup</a></p>
    </Card.Body>
  </Card>
    </div>
);
}
export default Login;
