import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Casedetails1() {
  return (
    <div>
       <Form.Group>
        <fieldset>
                <Row >
                    <legend>Case Details</legend>
                
                    
                    <div className="col-4">
                        <Form.Label> Cause of Action </Form.Label>
                        <Form.Control type="text" placeholder="Enter Cause of action" />
                    </div>
                                    
                   <div className="col-4">
                        <Form.Label> Date of Cause of Action </Form.Label>
                        <Form.Control type='Date' placeholder='Enter your date' />
                    </div>

                    <div className="col-4">
                        <Form.Label> Subject or Reason </Form.Label>
                        <Form.Control type='text' placeholder='Important information or Subject or Reason' />
                    </div>
          
                    <div className="col-4">
                        <Form.Label> Prayer </Form.Label>
                        <Form.Select>
                            <option>Select an option</option>
                        </Form.Select>
                    </div>

                    <div className="col-4">
                        <Form.Label> Suit Valuation </Form.Label>
                        <Form.Control type='number' placeholder='Enter Value' />
                    </div>

                    <div className="col-4">
                        <Form.Label> Relief Claimed </Form.Label>
                        <Form.Control as="textarea" placeholder='Write your Claim' />                    
                    </div>
              
                    <div className="col-4 check">
                        <Form.Check label='Change Filling date' />
                    </div>

                    <div className="col-4 check">
                        <Form.Check label='Plaint in Local Language' />
                    </div>

                    <div className="col-4 check">
                        <Form.Check label='Hide Parties' />
                    </div>

                    <div className="col-4 ">
                        <Form.Label htmlFor=''> Date of Filling </Form.Label>
                        <Form.Control type='date' id='' placeholder='' value={''} name='' />
                    </div>

                    <div className="col-4">
                        <Form.Label htmlFor=''> Time of Filling </Form.Label>
                        <Form.Control type='time' />
                    </div>

                    <div className="col-4">
                        <Form.Label htmlFor=''> Amount </Form.Label>
                        <Form.Control type='number' placeholder='Enter Amount in Rupees ' />
                    </div>
               </Row>
                </fieldset>
                <fieldset>
                <br />
                <legend>Dispute Arising Out of </legend>

                <Row>
                    <div className="col-4">
                        <Form.Label>State</Form.Label>
                        <Form.Select>
                            <option>Select your State</option>
                        </Form.Select>
                    </div>

                    <div className="col-4">
                        <Form.Label>District</Form.Label>
                        <Form.Select>
                            <option> Select your District</option>
                        </Form.Select>
                    </div>
              
                    <div className="col-4">
                        <Form.Label>Taluka</Form.Label>
                        <Form.Select>
                            <option>Select your Taluka</option>
                        </Form.Select>
                    </div>

                    <div className="col-4">
                        <Form.Label>Village</Form.Label>
                        <Form.Select>
                            <option>Select your Village</option>
                        </Form.Select>
                    </div>
                </Row>  
                </fieldset>              
            </Form.Group>
    </div>
  )
}

export default Casedetails1