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
    <Navbar onSelect={handleSelect} expand="md" bg="dark" variant="dark" className='navbar navbar-expand' activeKey="home">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/" className='m-2'>Eric Straw</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" defaultActiveKey="/" as="ul">
        <Nav defaultActiveKey="home">
            <Nav.Link as={Link} eventKey="home" to="/" exact>Home</Nav.Link>
            <Nav.Link as={Link} eventKey="blog" to="blog">Blog</Nav.Link>
            <Nav.Link as={Link} eventKey="aboutMe" to="aboutMe">About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Item className="flex-grow-1">
          //This is for spacing
      </Nav.Item>
      <Nav.Item className='d-flex m-2'>
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
    </Navbar>
  );
};

export default NavBar;