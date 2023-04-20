import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from '../Components/Profile/Profile';
import WorkExperience from '../Components/WorkExperience/WorkExperience';
import SkillGroup from '../Components/SkillGroup/SkillGroup';

const AboutMe = () => {    

    return (
        <Container>
            <Profile/>
            <WorkExperience/>
            <SkillGroup/>
        </Container>
    );
};

export default AboutMe;