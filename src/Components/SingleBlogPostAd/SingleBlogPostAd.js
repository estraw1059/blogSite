import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import db from '../../Firebase';
import { doc, getDoc} from 'firebase/firestore';

//Props will pass in id which is the id of the add.
// The home page will find the promoted adds and create multiple ads for it. 
const SingleBlogPostAd = (props) => {

    const [blogData, setBlogData] = useState([]);


    const handleClick = () => {
        console.log('Clicked Item')
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
    console.log(`Document Id found for ${blogData}`)
    return (
        <div style={{ height: '100%' }} onClick={handleClick}>
            <h3>{blogData.id}</h3>
            <h2>{blogData.title}</h2>
        </div>
    );
};

export default SingleBlogPostAd;