import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';
import db from '../../Firebase';
import { onSnapshot, collection} from 'firebase/firestore';
import FilterButton from '../FilterButton/FilterButton';
import ProjectModal from '../ProjectModal/ProjectModal';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filters, setFilter] = useState([]);
    const [filterState, setFilterState] = useState({});
    const [displayModal, setDisplayModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    useEffect(() => {
        const fetchData = async() => {
            const projectSnapshot = onSnapshot(collection(db, 'projects'), (snapshot) => {
                setProjects(snapshot.docs.map(doc => doc.data()));
            });
            const filterSnapshot = onSnapshot(collection(db, 'projectFilters'), (snapshot) => {
                var filters = {
                    all: true
                };
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
    
    const setAll = (newFilter, currentFilter) => {
        if (!currentFilter[newFilter]) {
            return {
                ...currentFilter,
                all: false
            }
        }
        //We need to go through all objects and see if they are all false
        let all = true;
        for(const key in currentFilter) {
            if(key === 'all' || key === newFilter) {
                continue;
            }
            if(currentFilter[key]) {
                all = false;
                break;
            }
        }
        return {
            ...currentFilter,
            all: all
        }
    }

    const handleFilterChange = (newFilter) => {
        setFilterState(currentFilter => {
            currentFilter = setAll(newFilter, currentFilter);
            const updatedFilter = {
                ...currentFilter,
                [newFilter]: !currentFilter[newFilter]
    
            }
            return updatedFilter;
        });
    }

    return (
        <>
            <Container className="projectSpacing">
                <Card className="cardSpacing">
                    <Row className='header m-2'>
                        <h1>Projects</h1>
                        <h6>Select to filter by language</h6>
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
                            for(let i = 0; i < project.filterFields.length; i++) {
                                if (filterState['all'] || filterState[project.filterFields[i]]) {
                                    return <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc} projectWebLink={project.projectWebLink} projectCodeLink={project.projectCodeLink} setModal={setDisplayModal} setModalInfo={setModalInfo} />
                                }
                            }
                            return;
                        })}
                    </Row>
                </Card>
            </Container>
            <ProjectModal setDisplayModal={setDisplayModal} displayModal={displayModal} modalInfo={modalInfo} />
        </>
        
    );
};

export default Projects;