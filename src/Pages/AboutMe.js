import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Skill from '../Components/Skill/Skill';
import db from '../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import Profile from '../Components/Profile/Profile';
import WorkExperience from '../Components/WorkExperience/WorkExperience';

const AboutMe = () => {
    const [skills, setSkills] = useState([]);
    useEffect(
        () => 
        onSnapshot(collection(db, 'skills'), (snapshot) => {
            setSkills(snapshot.docs.map(doc => doc.data()));
        }), []);
    

    return (
        <Container>
            <Profile/>
            <WorkExperience/>
            <Container>
                <Row>
                    {skills.map((skill) => {
                        return <Skill skillName={skill.skill} skillPercent={skill.skillPercent}/>
                    })}
                </Row>
            </Container>
        </Container>
    );
};

export default AboutMe;