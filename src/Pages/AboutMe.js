import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Skill from '../Components/Skill/Skill';
import db from '../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import '../Components/SkillGroup/SkillGroup.css';

const AboutMe = () => {
    const [skills, setSkills] = useState([]);
    useEffect(
        () =>
        onSnapshot(collection(db, 'skills'), (snapshot) => {
            setSkills(snapshot.docs.map(doc => doc.data()));
        }), []);

    return (
        <Container>
            <Row>
                {skills.map((skill) => {
                    return <Skill skillName={skill.skill} skillPercent={skill.skillPercent}/>
                })}
            </Row>
        </Container>
    );
};

export default AboutMe;