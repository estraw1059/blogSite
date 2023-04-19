import React, {useState, useEffect} from 'react';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Nav, NavItem, Card, Tab, Tabs, Carousel } from 'react-bootstrap';
import Job from './Job';
import './WorkExperience.css';

const WorkExperience = (props) => {
    const [key, setKey] = useState('current');
    const [workExp, setWorkExp] = useState([]);
    useEffect(
        () => 
        onSnapshot(collection(db, 'experience'), (snapshot) => {
            setWorkExp(snapshot.docs.map(doc => doc.data()));
        }), []);

    //TODO: Lets a make a carousel class that takes a JSON of work exeperience. Then I can add to to firebase and pull down
    return (
        <Card className='WorkSizing'>
            <Tabs
                id="work-experience"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                justify
                fill
            >
                <Tab eventKey="current" title="Current Work">
                    {workExp.map((skill, index) => {
                        return <Job company={skill.company} title={skill.title} dates={skill.date} description={skill.details} logo={skill.logo} key={index}/>
                    })}
                </Tab>
                <Tab eventKey="past" title="Past Work">
                    <h4>Past Work</h4>
                    <p>I used to work at Arcosa as a senior staff engineer</p>
                </Tab>
            </Tabs>
        </Card>
    );
};

export default WorkExperience;