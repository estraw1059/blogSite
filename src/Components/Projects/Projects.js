import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';

const Projects = () => {
    return (
        <Container className="projectSpacing">
            <Card>
                <Row className='header'>
                    <h1>Projects</h1>
                </Row>
                <Row>
                    <ProjectCard projectName="MSCSHub Website" projectDesc={"Built A review website for UT Computer Science Master Program"}/>
                </Row>
            </Card>
        </Container>
    );
};

export default Projects;