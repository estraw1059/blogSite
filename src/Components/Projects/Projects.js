import React, {useState, useEffect} from 'react';
import {Card, Container, Row} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(
        () => 
        onSnapshot(collection(db, 'projects'), (snapshot) => {
            setProjects(snapshot.docs.map(doc => doc.data()));
        }), []);


    return (
        <Container className="projectSpacing">
            <Card>
                <Row className='header'>
                    <h1>Projects</h1>
                </Row>
                <Row>
                    {projects.map((project, index) => {
                        return <ProjectCard projectName={project.projectName} projectDesc={project.projectDesc} projectWebLink={project.projectWebLink} projectCodeLink={project.projectCodeLink}/>
                    })}
                </Row>
            </Card>
        </Container>
    );
};

export default Projects;