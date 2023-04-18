import React, {useState} from 'react';
import { Nav, NavItem, Card, Tab, Tabs } from 'react-bootstrap';

const WorkExperience = () => {
    const [key, setKey] = useState('current');
    //TODO: Lets a make a carousel class that takes a JSON of work exeperience. Then I can add to to firebase and pull down
    return (
        <Tabs
            id="work-experience"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            justify
            fill
        >
            <Tab eventKey="current" title="Current Work">
                <h4>Current Work</h4>
                <p>I currently work at Cvent as a senior software Engineer and at SMU as an Adjunct</p>
            </Tab>
            <Tab eventKey="past" title="Past Work">
                <h4>Past Work</h4>
                <p>I used to work at Arcosa as a senior staff engineer</p>
            </Tab>
        </Tabs>
    );
};

export default WorkExperience;