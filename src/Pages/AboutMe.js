import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from '../Components/Profile/Profile';
import WorkExperience from '../Components/WorkExperience/WorkExperience';
import SkillGroup from '../Components/SkillGroup/SkillGroup';
import Projects from '../Components/Projects/Projects';

const AboutMe = () => {    

    return (
        <Container>
            <Profile/>
            <WorkExperience/>
            <Projects/>
            <SkillGroup/>
        </Container>
    );
};

export default AboutMe;