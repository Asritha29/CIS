import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


function Extrainfo1() {
  return (
    <div> 
          <Form.Group>
    <fieldset>
<Row>
       <legend>Petitioner Extra Information</legend>


   <div className="col-4">
   <Form.Label htmlFor=''>Pasport No</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter Pasport No"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Pan No</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter Pan No"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Country</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter country name"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Nationality</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter Nationality"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Occupation</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter occupation"  name="" value={''} />
   </div>

   <div className="col-4">
   <Form.Label htmlFor=''> Alternatve Address</Form.Label>
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
</Row>
</fieldset>
<fieldset>
<Row>
<legend>Respondent Extra Information</legend>
<div className="col-4">
   <Form.Label htmlFor=''>Pasport No</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter Pasport No"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Pan No</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter Pan No"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Country</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter country name"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Nationality</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter Nationality"  name="" value={''} />
   </div>  

   <div className="col-4">
   <Form.Label htmlFor=''>Occupation</Form.Label>
   <Form.Control type="text" id='' placeholder="Enter occupation"  name="" value={''} />
   </div>

   <div className="col-4">
   <Form.Label htmlFor=''> Alternatve Address</Form.Label>
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
</Row>
</fieldset>
</Form.Group>
</div>
  )
}

export default Extrainfo1