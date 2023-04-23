import React from 'react';
import { Card } from 'react-bootstrap';
import './Job.css';

const Job = ({company, title, dates, description, logo}) => {
    //Todo add background photo of company
    return (
        <Card>
            <Card.Header>{company}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{dates}</Card.Subtitle>
                <Card.Text>
                    <ul>
                        {description.map((role, index) => (
                            <li key={index}>{role}</li>
                        ))}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Job;