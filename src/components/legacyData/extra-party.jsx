import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


function ExtraParty() {
  return (
    <div>
      <Form.Group>
        <Row>
        <div className="col-4">
            <Form.Label for="" class="form-label mrs">Type</Form.Label>
           
            {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-2">
          <Form.Check
            inline
            label="Complainant"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Accused"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          </div>
          ))}
            </div>
            <div className="col-4">
            <Form.Label htmlFor=''>Organization Name</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter organization name"  name="" value={''} />
            </div>

            <div className="col-4 check">
            <Form.Check  inline   label="Organization details"  name="group1"  type='checkbox' id={''}  />
            </div>

            <div className="col-3">
            <Form.Label htmlFor=''>Complainant/Accused(2)</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>  
                     
            </div>

            <div className="col-3 check">
            <Form.Control type="text" id='' placeholder=""  name="" value={''} />
            </div>
            
            <div className="col-3">
            <Form.Label htmlFor=''>Complainant/Accused(2)</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>  
            </div>

            <div className="col-2 check">
            <Form.Control type="text" id='' placeholder=""  name="" value={''} />
            </div>
            <div className="col-1 check">
            <Button variant="outline-primary" type="reset">Reset</Button> 
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Bar Regn. No:</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter Bar Regn. No:"  name="" value={''} />
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Email</Form.Label>
            <Form.Control type="email" id='' placeholder="example@gmail.com"  name="" value={''} />
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Mobile No </Form.Label>
            <Form.Control type="tel" id='' placeholder="Enter mobile number"  name="" value={''} />
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Address</Form.Label>
            <Form.Control as="textarea" rows={3}  id=""  name='' placeholder="Address" value={''} />
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Pin Code</Form.Label>
            <Form.Control type="number" id='' placeholder="Enter Pin Code"  name="" value={''} />
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>State</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>District</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Town</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Ward</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>
            <div className="col-4">
            <Form.Label htmlFor=''>Taluka</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Village</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>Police Station Code</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-4">
            <Form.Label htmlFor=''>UID No</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter UID No"  name="" value={''} />
            </div>

        </Row>
      </Form.Group>
    </div>
  )
}


export default ExtraParty