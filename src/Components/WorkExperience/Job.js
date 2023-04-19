import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

const Job = ({company, title, dates, description, logo}) => {
    //Todo add background photo of company
    return (
        <Card>
            {/* Need to work on this
             <div className='d-flex justify-content-center'>
                <Card.Img
                    src={logo}
                    alt={company}
                    className="job-logo"
                />
            </div> */}
            <Card.Header>{company}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{dates}</Card.Subtitle>
                <ul>
                    {description.map((role, index) => (
                        <li key={index}>{role}</li>
                    ))}
                 </ul>
            </Card.Body>
        </Card>
    );
};

export default Job;