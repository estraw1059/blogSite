import React from 'react';
import BlogPostCard from '../BlogPostCard';
import underConstructionSVG from '../SVG/underConstructionSVG.svg';
import ConstructionSite from '../ConstructionSite';
import {Container} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <ConstructionSite/>
            <img src={underConstructionSVG} alt="github" />
            <Container>
                <BlogPostCard title ="Example Title" text="A very basic description of my Blog Post"/>
            </Container>
        </div>
    );
};

export default Home;