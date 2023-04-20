import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';
import { Container, Row } from 'react-bootstrap';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const SkillGroup = () => {

    const [skills, setSkills] = useState([]);
    useEffect(
        () => 
        onSnapshot(collection(db, 'skills'), (snapshot) => {
            setSkills(snapshot.docs.map(doc => doc.data()));
        }), []);


    return (
        <Container>
            <Row>
                {skills.map((skill, index) => {
                    return <Skill skillName={skill.skill} skillPercent={skill.skillPercent} key={index}/>
                })}
            </Row>
        </Container>
    );
};

export default SkillGroup;