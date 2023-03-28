import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import githubSVG from "./githubSVG.svg";
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <Navbar bg="dark" variant='dark' expand="md">
        <Container>
          <Navbar.Brand href="/home">Eric Straw</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" defaultActiveKey="/home" as="ul">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="aboutMe">About Me</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
                <Nav.Link href="https://github.com/estraw1059" target="_blank">
                    <img src={githubSVG} alt="github" />
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;