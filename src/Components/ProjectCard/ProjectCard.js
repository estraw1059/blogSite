import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProjectCard = ({projectName, projectCodeLink, projectWebLink, projectDesc}) => {
    return (
        <Col xs={12} lg={6} xl={4}> 
            <Card>
                <Card.Title>{projectName}</Card.Title>
                <Card.Text>{projectDesc}</Card.Text>
            </Card>
        </Col>
    );
};

export default ProjectCard;