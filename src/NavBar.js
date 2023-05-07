import React, {useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import githubSVG from "./SVG/githubSVG.svg";
import LinkedIn from "./SVG/LinkedIn.svg";
import emailSVG from "./SVG/Email.svg";
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  const [activeKey, setActiveKey] = useState('home');
  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
      <Navbar onSelect={handleSelect} expand="md" bg="dark" variant="dark" className='navbar navbar-expand fixed-top' activeKey="home">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/home" eventKey="home" activeKey="">Eric Straw</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" defaultActiveKey="/home" as="ul">
          <Nav.Item className='d-flex text-light'>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="home" to="/" exact>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="blog" to="blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="aboutMe" to="aboutMe">About Me</Nav.Link>
            </Nav.Item>
          </Nav.Item>
          <Nav.Item className="flex-grow-1">
            //This is for spacing
          </Nav.Item>
          <Nav.Item className='d-flex'>
              <Nav.Item>
                <Nav.Link href="https://github.com/estraw1059" target="_blank">
                  <img src={githubSVG} alt="github" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/eric-straw-477739102" target="_blank">
                  <img src={LinkedIn} alt="LinkedIn"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='mailto:estraw@smu.edu'>
                  <img src={emailSVG} alt="Email Me"/>
                </Nav.Link>
              </Nav.Item>
          </Nav.Item>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;