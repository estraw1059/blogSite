import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({projectName, projectCodeLink, projectWebLink, projectDesc, setModal, setModalInfo}) => {
    const activateModal = () => {
        setModalInfo(
            {
                projectName,
                projectDesc
            }
        );
        setModal(true);
    }
    return (
        <Col xs={12} lg={6} xl={4}> 
            <Card className="projectCard" onClick={() => activateModal()}>
                <Card.Title>{projectName}</Card.Title>
                <Card.Text className="projectDesc">{projectDesc}</Card.Text>
                <Row>
                    <Col xs={6}>
                        <a href={projectCodeLink} target="_blank">
                            <Button variant="dark" className="rounded-pill" style={{ width: '100%' }}>
                                &lt;/&gt;
                            </Button>
                        </a>
                    </Col>
                    {projectWebLink && (<Col xs={6}>
                        <a href={projectWebLink} target="_blank">
                            <Button variant="dark" className="rounded-pill" style={{ width: '100%' }}>
                                www
                            </Button>
                        </a>
                    </Col>)}
                </Row>

            </Card>
        </Col>
    );
};

export default ProjectCard;