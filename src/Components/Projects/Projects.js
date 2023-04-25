import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import FilterButton from '../FilterButton/FilterButton';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(
        () => 
        onSnapshot(collection(db, 'projects'), (snapshot) => {
            setProjects(snapshot.docs.map(doc => doc.data()));
        }), []);
    
    const handleFilterChange = (newFilter) => {
        setFilter([newFilter]);
    }

    return (
        <Container className="projectSpacing">
            <Card>
                <Row className='header'>
                    <h1>Projects</h1>
                </Row>
                <Row>
                    <Col>
                        <FilterButton field="C++" onClick={() => handleFilterChange("C++")}/>
                    </Col>
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