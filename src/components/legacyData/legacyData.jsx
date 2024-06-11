import React from 'react'

import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

// import { Modal, Table,Tab,Tabs} from 'react-bootstrap';

function LegacyData() {
  return (
    <div>
        <Form.Group>
          <Row>
            <div className="col-4">
            <Form.Label for="" class="form-label mrs">Case Type</Form.Label>
              <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select> 
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Case No</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>
            
            <div className="col-4">
            <Form.Label htmlFor=''>Case Year</Form.Label>
            <Form.Control type="Number" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label for="" class="form-label mrs">Case Type</Form.Label>
              <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select> 
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>SR No</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Year</Form.Label>
            <Form.Control type="number" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Court No</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Case No</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select> 
            </div>
            <Col sm={{ span: 15, offset: 5 }}>
          <br /> 
            <Button variant="outline-primary" type="submit">Go</Button> 
            <br/>
          </Col>
            

      
            <div className="col-2">
            <Form.Label htmlFor=''>Pending</Form.Label>
            <Form.Check type='radio' id=''   />
            </div>

            <div className="col-2">
            <Form.Label htmlFor=''>Disposal</Form.Label>
            <Form.Check type='radio' id=''   />
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Date of Filling</Form.Label>
            <Form.Control type='date' id='' placeholder="mm/dd/yyyy"  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Time of Filling</Form.Label>
            <Form.Control type="time" id='' placeholder=""  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Date of Registration</Form.Label>
            <Form.Control type="date" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Date of Hearing</Form.Label>
            <Form.Control type="date" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>
            <div className="col-4">
            <Form.Label htmlFor=''>Purpose of Listing</Form.Label>
            <Form.Control type="date" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>
          </Row>
            <br/>
      
        </Form.Group>
    </div>
  )
}

export default LegacyData