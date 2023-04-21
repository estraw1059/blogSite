import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';
import { Container, Row, Card } from 'react-bootstrap';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import './SkillGroup.css';

const SkillGroup = () => {

    const [skills, setSkills] = useState([]);
    useEffect(
        () => 
        onSnapshot(collection(db, 'skills'), (snapshot) => {
            setSkills(snapshot.docs.map(doc => doc.data()));
        }), []);


    return (
        <Container>
            <Card>
                <Row className="header">
                    <h1>Skills</h1>
                </Row>
                <Row>
                    {skills.map((skill, index) => {
                        return <Skill skillName={skill.skill} skillPercent={skill.skillPercent} key={index}/>
                    })}
                </Row>
            </Card>
        </Container>
    );
};

export default SkillGroup;