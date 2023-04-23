import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({projectName, projectCodeLink, projectWebLink, projectDesc}) => {
    return (
        <Col xs={12} lg={6} xl={4}> 
            <Card className="projectCard">
                <Card.Title>{projectName}</Card.Title>
                <Card.Text className="projectDesc">{projectDesc}</Card.Text>
                <Row>
                    <Col xs={6}>
                        <a href={projectCodeLink} target="_blank">
                            <Button variant="primary" className="rounded-pill" style={{ width: '100%' }}>
                                &lt;/&gt;
                            </Button>
                        </a>
                    </Col>
                    <Col xs={6}>
                        <a href={projectWebLink} target="_blank">
                            <Button variant="primary" className="rounded-pill" style={{ width: '100%' }}>
                                www
                            </Button>
                        </a>
                    </Col>
                </Row>

            </Card>
        </Col>
    );
};

export default ProjectCard;