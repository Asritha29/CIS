import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Table,Tab,Tabs} from 'react-bootstrap';
import './legacyData.css'
import LegacyData from './legacyData'; 
import Petitioner from './petitioner';
import Respondent from './respondent';
import Extrainfo from './extrainfo';
import ActSetion from './act-setion';
import ExtraParty from './extra-party';
import PartyWiseAct from './partyWiseAct';
import CaseDetails from './caseDetails';
function LegacyRegistration() {

    const [activeTab, setActiveTab] = useState(0);
    const handleNext = () => {
        setActiveTab(activeTab + 1);
      };
    
      const handleBack = () => {
        setActiveTab(activeTab - 1);
      };
    return(
        <div className='legacydata'>
        <Form >
        <Tabs id="controlled-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey={0} title="Legacy data">
            {/* legacy data */}
            <LegacyData />
            <br />
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>
            
            <Tab eventKey={1} title="Petitioner">
                {/* Petitioner */}

               <Petitioner />
               <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={2} title="Respondent">
                {/* Respondent */}

                <Respondent />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={3} title="Extra Information"> 
                {/* Extra Information */}

                <Extrainfo />
                <br/>
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={4} title="Act-Section">
                {/* act-section */}

                <ActSetion />
                    <br/>
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={5} title="Extra-party">
                {/* enter-party */}

                <ExtraParty />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={6} title="Party Wise Acts">
                {/* party wise acts */}

                <PartyWiseAct />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
            </Tab>

            <Tab eventKey={7} title="Case Details">
                {/* case details */}

                <CaseDetails />
                <br />
                <Button variant="primary" onClick={handleBack}>Back</Button>
                <Button variant="primary" className='next' >Save</Button>
            </Tab>
            </Tabs>
        </Form>
        </div>
    )
}
 

export default LegacyRegistration;
