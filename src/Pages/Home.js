/* eslint-disable-next-line */
import React from 'react';
import BlogPostCard from '../BlogPostCard';
import ConstructionSite from '../ConstructionSite';
import {Container, Image} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <ConstructionSite/>
                <Image src="https://img.icons8.com/officel/80/null/under-construction.png" fluid/>
            <Container>
                <BlogPostCard title ="Example Title" text="A very basic description of my Blog Post"/>
            </Container>
        </div>
    );
};

export default Home;