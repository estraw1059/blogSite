import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import githubSVG from "./SVG/githubSVG.svg";
import emailSVG from "./SVG/Email.svg";
import LinkdenIn from "./SVG/LinkedIn.svg";
import './WebsiteFooter.css';
const WebsiteFooter = () => {
    return (
        <footer fluid="true" className="bg-dark text-light footer">
        <Row>
            <Col className="text-center py-3">
                Created By Eric Straw
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='iconContainer'>
                    <Button variant='dark' className='bg-dark icon' href='mailto:estraw@smu.edu'>
                        <img src={emailSVG} alt="email me" />
                    </Button>
                    <Button variant='dark' className='bg-dark icon' href="https://github.com/estraw1059" target="_blank">
                        <img src={githubSVG} alt="github" />
                    </Button>
                    <Button variant='dark' className='bg-dark icon' href="https://www.linkedin.com/in/eric-straw-477739102" target="_blank">
                        <img src={LinkdenIn} alt="LinkdenIn" />
                    </Button>
                </div>
            </Col>
        </Row>
      </footer>
    );
};

export default WebsiteFooter;