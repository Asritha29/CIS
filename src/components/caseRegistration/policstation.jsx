import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Policstation() {
  return (
    <div>
      <Form.Group>
        <Row>
          <div className="col-4">
            <Form.Label htmlFor=''>Police Challan or Private Complaint:</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
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
            <Form.Label htmlFor=''>Police Station Code</Form.Label>
            <Form.Select >
                <option value="" >Select an option</option>
              </Form.Select>
            </div>

            <div className="col-3">
              <Form.Label htmlFor=''>Date of Offence</Form.Label>
              <Form.Control className='' id='' name='' type='date' placeholder='' value={''} />
            </div>
            <div className="col-1 check">
            <Button variant="outline-primary" type="button">Search</Button>
            </div>

            <div className="col-4">
              <Form.Label htmlFor=''>Date of Filing Charge Sheet</Form.Label>
              <Form.Control id='' name='' type='date' placeholder='' value={''} />
            </div>

            <div className="col-4">
                <Form.Label htmlFor=''>FIR Type</Form.Label>
                <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item >select</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" type='text'  />
      </InputGroup>
                </div>

            <div className="col-4">
              <Form.Label htmlFor=''>FIR No</Form.Label>
              <Form.Control type='text' id='' placeholder=' Enter FIR no' name='' value={''} />
            </div>

            <div className="col-3">
              <Form.Label htmlFor=''>Year</Form.Label>
              <Form.Control type='text' id='' placeholder=' Enter FIR no' name='' value={''} />
            </div>

            <div className="col-1 check">                
                <Button variant="outline-primary" type="reset">Search</Button>
         </div>

         <div className="col-4">
                <Form.Label htmlFor=''>Investigation Agency</Form.Label>
                <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item >select</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" type='text' />
      </InputGroup>
                </div>
                
            <div className="col-4">
              <Form.Label htmlFor=''>FIR Filing Date</Form.Label>
              <Form.Control id='' name='' placeholder='' type='date' />
            </div>

            <div className="col-4">
              <Form.Label htmlFor=''>Investigating Officer</Form.Label>
              <Form.Control id='' name='' placeholder='' type='text' />
            </div>

            <div className="col-4">
              <Form.Label htmlFor=''>Belt no</Form.Label>
              <Form.Control id='' name='' placeholder='' type='text' />
            </div>

            <div className="col-4">
              <Form.Label htmlFor=''>Investigating Officer 1</Form.Label>
              <Form.Control id='' name='' placeholder='' type='text' />
            </div>

            <div className="col-4">
              <Form.Label htmlFor=''>Belt no 1:</Form.Label>
              <Form.Control id='' name='' placeholder='' type='text' />
            </div>
            <div className="col-4">
                <Form.Label htmlFor=''>Trials</Form.Label>
                <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item >select</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" type='text' />
      </InputGroup>
                </div>

                <div className="col-4">
            <Form.Label htmlFor=''>Offence Remark</Form.Label>
            <Form.Control as="textarea" rows={2}  id=""  name='' placeholder="Offence Remark" value={''} />
            </div>

        </Row>
      </Form.Group>
    </div>
  )
}

export default Policstation