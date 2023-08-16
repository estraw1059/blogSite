import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import db from '../../Firebase';
import { doc, getDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './SingleBlogPostAd.css';

//Props will pass in id which is the id of the add.
// The home page will find the promoted adds and create multiple ads for it. 
const SingleBlogPostAd = (props) => {

    const [blogData, setBlogData] = useState([]);
    const navigate = useNavigate();


    const handleClick = (id) => {
        navigate(`/blog/${id}`);
    }

    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const docRef = doc(db, 'blogPost', props.id);
                getDoc(docRef).then((doc) => {
                    setBlogData(doc.data());
                });

            } catch (error) {
                console.error('Error getting blog post', error);
                setBlogData(null);
            }
        }
        getDocumentById();
    }, []);

    return (
        <div className='ad' onClick={() => handleClick(blogData.id)}>
            <h2>{blogData.title}</h2>
        </div>
    );
};

export default SingleBlogPostAd;