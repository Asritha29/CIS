import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Actsection1() {
  return (
    <div>
       <Form.Group>
            <Row>
                <div className="col-6">
                <Form.Label htmlFor=''>Act1</Form.Label>
            <Form.Select >
            <option value="" disabled selected>Select an option</option>
                <option value="1">CODE OF CIVIL PROCEDURE, 1908 (HB)-27</option>
                <option value="2">CODE OF CRIMINAL PROCEDURE-36</option>
                <option value="3">INDIAN PENAL CODE, 1860-59</option>
              </Form.Select>
                </div>

                <div className="col-6">
                <Form.Label htmlFor=''>Act Section1</Form.Label>
                <Form.Control type="text" id='' placeholder="Enter Act Section"  name="" value={''} />
                </div>

                <Col sm={{ span: 5 ,offset:5 }}>
          <br /> 
            <Button variant="outline-primary" type="button">More Acts...</Button> 
            <br/>
          </Col>
            </Row>
        </Form.Group>
    </div>
  )
}

export default Actsection1