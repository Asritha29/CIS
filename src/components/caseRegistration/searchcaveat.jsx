import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Searchcaveat() {
  return (
    <div>
        <Form.Group>
                <Row>
                    <div className="col-3">
                        <Form.Check type='radio' label='Anywhere' />
                    </div>

                    <div className="col-3">
                        <Form.Check type='radio' label='Starting with' />
                    </div>

                    <div className="col-3">
                        <Form.Check type='radio' label='Soundex' />
                    </div>

                    <div className="col-3">
                        <Form.Check type='radio' label='Subordinate court' />
                    </div>
             
                    <div className="col-6">
                        <Form.Label>Caviater Name</Form.Label>
                        <Form.Control type='text' placeholder='Eneter Caviater Name' />
                    </div>
                
                    <div className="col-6">
                        <Form.Label>Caveatee Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter Caveatee Name' />
                    </div>
                    <div className="col-1 check">
                        <Button variant='primary'>Go</Button>
                    </div>
                </Row>
            </Form.Group>
    </div>
  )
}

export default Searchcaveat