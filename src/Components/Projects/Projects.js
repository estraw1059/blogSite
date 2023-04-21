import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';
import './Project.css';

const Projects = () => {
    return (
        <Container className="projectSpacing">
            <Card>
                <Row className='header'>
                    <h1>Projects</h1>
                </Row>
            </Card>
        </Container>
    );
};

export default Projects;