import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import githubSVG from "./githubSVG.svg";
import emailSVG from "./Email.svg";
import './Footer.css';
const Footer = () => {
    return (
        <Container fluid className="bg-dark text-light position-absolute bottom-0">
        <Row>
            <Col className="text-center py-3">
                Created By Eric Straw
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='iconContainer'>
                    <Button className='icon' style={{ outline: 'none' }} href='mailto:estraw@smu.edu'>
                        <img src={emailSVG} alt="email me" />
                    </Button>
                    <Button className='bg-dark icon' style={{ outline: 'none !important' }} href="https://github.com/estraw1059" target="_blank">
                        <img src={githubSVG} alt="github" />
                    </Button>
                </div>
            </Col>
        </Row>
      </Container>
    );
};

export default Footer;