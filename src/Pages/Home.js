/* eslint-disable-next-line */
import React from 'react';
import UnderConstruction from '../Components/UnderConstruction/UnderConstruction';
import { Container, Carousel } from 'react-bootstrap';
import './Pages.css';
import SingleBlogPostAd from '../Components/SingleBlogPostAd/SingleBlogPostAd';

const Home = () => {
    return (
            <Carousel className='homePageCarousel'>
                <Carousel.Item>
                    <UnderConstruction/>
                </Carousel.Item>
                <Carousel.Item>
                    <SingleBlogPostAd id='bRqMShD4Nn7v7zFlPZZA'/>
                </Carousel.Item>
            </Carousel>
    );
};

export default Home;