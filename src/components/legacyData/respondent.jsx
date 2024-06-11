import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
function Respondent() {
  return (
    <div>
        <Form.Group>
            <Row>
                
                <div className="col-4 check">
                <Form.Check
            inline
            label="Organisation Details"
            name=""
            type='checkbox'
            id=''
          />
                </div>
                <div className="col-4">
            <Form.Label htmlFor=''>Orgainsation Name</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter name"  name="" value={''} required/>
            </div>

                <div className="col-4">
                <Form.Label htmlFor=''>Accused</Form.Label>
                <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item >select</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" type='text' required />
      </InputGroup>
                </div>

                <div className="col-2">                
            <Form.Label htmlFor=''>Extra Respondent Count</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter advocate name"  name="" value={''} />
         </div>

                <div className="col-2 check">                
                <Form.Check
            inline    label="Proforma Respondent"    name="group1"     type='checkbox'     id=''   />
         </div>

                <div className="col-3">                
            <Form.Label htmlFor=''>Name of Advocate</Form.Label>
            <Form.Control type="text" id='' placeholder="Enter advocate name"  name="" value={''} />
         </div>

                <div className="col-1 check">                
                <Button variant="outline-primary" type="reset">Reset</Button>
         </div>

         <div className="col-4">
         <Form.Label htmlFor=''>Bar Regn. No</Form.Label>
         <Form.Control type="text" id='' placeholder="Enter bar regn no"  name="" value={''} />
         </div>

         <div className="col-4">
         <Form.Label htmlFor=''>Email</Form.Label>
         <Form.Control type="Email" id='' placeholder="Enter advocate name"  name="" value={''} />
         </div>

         <div className="col-4">
         <Form.Label htmlFor=''>Mobile No</Form.Label>
         <Form.Control type="tel" id='' placeholder="Enter mobile no"  name="" value={''} />
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
            <Form.Control id='' value={''} name='' type='text' placeholder='Enter UID No' />
            </div>

            </Row>
        </Form.Group>
    </div>
    
  )
}

export default Respondent