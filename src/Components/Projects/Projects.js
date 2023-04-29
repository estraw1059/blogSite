import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';
import db from '../../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import FilterButton from '../FilterButton/FilterButton';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filters, setFilter] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const projectSnapshot = onSnapshot(collection(db, 'projects'), (snapshot) => {
                setProjects(snapshot.docs.map(doc => doc.data()));
            });
            const filterSnapshot = onSnapshot(collection(db, 'projectFilters'), (snapshot) => {
                setFilter(snapshot.docs.map(doc => doc.data()));
            });
            return [projectSnapshot, filterSnapshot];
        }
        
        fetchData();

        }, []);
    
    const handleFilterChange = (newFilter) => {
    }

    return (
        <Container className="projectSpacing">
            <Card>
                <Row className='header'>
                    <h1>Projects</h1>
                </Row>
                <Row>
                        {filters.map((filter, index) => {
                            console.log(filter.filter);
                            return (
                                <Col>
                                    <FilterButton field={filter.filter} onClick={() => handleFilterChange("Java")}/>
                                </Col>
                            )
                        })}
                        {/* <Col>
                         <FilterButton field="Java" onClick={() => handleFilterChange("Java")}/>
                        </Col>
                        <Col>
                         <FilterButton field="C++" onClick={() => handleFilterChange("Java")}/>
                        </Col> */}
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