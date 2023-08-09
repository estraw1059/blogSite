/* eslint-disable-next-line */
import React, {useState} from 'react';
import UnderConstruction from '../Components/UnderConstruction/UnderConstruction';
import { Carousel } from 'react-bootstrap';
import './Pages.css';
import SingleBlogPostAd from '../Components/SingleBlogPostAd/SingleBlogPostAd';
import { useEffect } from 'react';
import db from '../Firebase';
import { collection, getDocs, query, where, limit} from 'firebase/firestore';

const Home = () => {
    const [promotedPost, setPromotedPost] = useState([]);
    useEffect(() => {
        const getPromotedPost = async () => {
            try {
                const q = query(collection(db, 'blogPost'), limit(5), where('promoted', '==', true));
                const querySnapshot = await getDocs(q);
                const cardList = [];
                querySnapshot.forEach((doc) => {
                    cardList.push(doc.data());
                });
                setPromotedPost(cardList);

            } catch (error) {
                console.error('Error getting blog post', error);
            }
        }
        getPromotedPost();
    }, []);

    console.log(`${promotedPost[0].id}`);
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