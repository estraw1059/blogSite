import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';
import db from '../../Firebase';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import FilterButton from '../FilterButton/FilterButton';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filters, setFilter] = useState([]);
    const [filterState, setFilterState] = useState({});
    useEffect(() => {
        const fetchData = async() => {
            const projectSnapshot = onSnapshot(collection(db, 'projects'), (snapshot) => {
                setProjects(snapshot.docs.map(doc => doc.data()));
            });
            const filterSnapshot = onSnapshot(collection(db, 'projectFilters'), (snapshot) => {
                var filters = {};
                setFilter(snapshot.docs.map(doc => {
                    const data = doc.data()
                    const filterName = data.filter;
                    filters = {
                        ...filters,
                        [filterName]: false
                    }
                    filters[filterName] = false;
                    return data;
                }));
                setFilterState(filters);
            });
            return [projectSnapshot, filterSnapshot];
        }
        
        fetchData();

        }, []);
    
    const handleFilterChange = (newFilter) => {
        setFilterState(currentFilter => {
            return {
                ...currentFilter,
                [newFilter]: !currentFilter[newFilter]
    
            }
        });
    }

    return (
        <Container className="projectSpacing">
            <Card>
                <Row className='header'>
                    <h1>Projects</h1>
                </Row>
                <Row>
                        {filters.map((filter, index) => {
                            return (
                                <Col>
                                    <FilterButton key={index} field={filter.filter} onClick={() => handleFilterChange(filter.filter)}/>
                                </Col>
                            )
                        })}
                </Row>
                <Row>
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc} projectWebLink={project.projectWebLink} projectCodeLink={project.projectCodeLink}/>
                    })}
                </Row>
            </Card>
        </Container>
    );
};

export default Projects;