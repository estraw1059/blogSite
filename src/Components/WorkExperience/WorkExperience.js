import React, {useState, useEffect} from 'react';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { Card, Tab, Tabs } from 'react-bootstrap';
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
                        if (skill.isCurrent) {
                            return <Job company={skill.company} title={skill.title} dates={skill.date} description={skill.details} logo={skill.logo} key={index}/>
                        }
                        return <></>;
                    })}
                </Tab>
                <Tab eventKey="past" title="Past Work">
                    {workExp.map((skill, index) => {
                        if (!skill.isCurrent) {
                            return <Job company={skill.company} title={skill.title} dates={skill.date} description={skill.details} logo={skill.logo} key={index}/>   
                        }
                        return <></>;
                    })}
                </Tab>
            </Tabs>
        </Card>
    );
};

export default WorkExperience;