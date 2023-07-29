/* eslint-disable-next-line */
import React from 'react';
import UnderConstruction from '../Components/UnderConstruction/UnderConstruction';
import { Container, Carousel } from 'react-bootstrap';
import './Pages.css';

const Home = () => {
    return (
            <Carousel className='homePageCarousel'>
                <Carousel.Item>
                    <UnderConstruction/>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        Second
                    </div>
                </Carousel.Item>
            </Carousel>
    );
};

export default Home;