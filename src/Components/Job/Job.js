import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Job.css';

const Job = ({company, title, dates, description, logo}) => {
    //Todo add background photo of company
    return (

        <Container>
            <Card>
                <Card.Title>{company}</Card.Title>
                <Card.Body>
                    <Card.Subtitle>{title}</Card.Subtitle>
                    <Card.Text>{dates}</Card.Text>
                    <Card.Text>
                        {description.map((role, index) => (
                            <li key={index}>{role}</li>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Job;