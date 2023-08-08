/* eslint-disable-next-line */
import React, {useState} from 'react';
import UnderConstruction from '../Components/UnderConstruction/UnderConstruction';
import { Carousel } from 'react-bootstrap';
import './Pages.css';
import SingleBlogPostAd from '../Components/SingleBlogPostAd/SingleBlogPostAd';
import { useEffect } from 'react';

const Home = () => {
    const [promotedPost, setPromotedPost] = useState([]);
    useEffect(() => {
        //TODO: Get All Promoted Post
    }, []);

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