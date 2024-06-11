import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Table,Tab,Tabs} from 'react-bootstrap';
import './caseRegister.css'
import Petitioner1 from './petitioner1';
import Respondent1 from './respondent1';
import Extrainfo1 from './extrainfo1';
import Actsection1 from './actsection1';
import Policstation from './policstation';
import Extraparty1 from './extraparty1';
import Partywise1 from './partywise1';
import Casedetails1 from './casedetails1';
import Searchcaveat from './searchcaveat';
import Registration from './registration';

function CaseRegister() {

  const [activeTab, setActiveTab] = useState(0);
    const handleNext = () => {
        setActiveTab(activeTab + 1);
      };
    
      const handleBack = () => {
        setActiveTab(activeTab - 1);
      };
    return(
        <div className='caseregister'>
        <Form >
        <Tabs id="controlled-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey={0} title="Petitioner">
            {/* petitioner */}

            <Petitioner1 />
           <br />
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>
            
            <Tab eventKey={1} title="Respondent">
                {/* Respondent */}

              <Respondent1 />
              <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={2} title="Extra Information">
                {/* Extra information */}

                <Extrainfo1 />
                <br />                
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>


            <Tab eventKey={3} title="Act-Section">
                {/* act-section */}

                <Actsection1 />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={4} title="Polic Station">
                {/* Polic Station */}

                <Policstation />
                <br />                
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={5} title="MVC">
                {/* MVC */}

                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={6} title="Extra-party">
                {/* enter-party */}

                <Extraparty1 />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={7} title="Party Wise Acts">
                {/* party wise acts */}

                <Partywise1 />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={8} title="Case Details">
                {/* case details */}
                
                <Casedetails1 />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next'onClick={handleNext} >next</Button>
            </Tab>

            <Tab eventKey={9} title="Search caveat">
                {/* Search caveat */}

                <Searchcaveat />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next'onClick={handleNext} >next</Button>
            </Tab>

            <Tab eventKey={10} title="Registration">
                {/* Registration */}

                <Registration />
                <br/>
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next ' >Save</Button>
            </Tab>
            </Tabs>
        </Form>
        </div>
    )
}

export default CaseRegister