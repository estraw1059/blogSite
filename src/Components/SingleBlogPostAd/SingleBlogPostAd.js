import React from 'react';
import { useEffect, useState } from 'react';
import db from '../../Firebase';
import { doc, getDoc} from 'firebase/firestore';

//Props will pass in id which is the id of the add.
// The home page will find the promoted adds and create multiple ads for it. 
const SingleBlogPostAd = (props) => {

    const [blogData, setBlogData] = useState([]);

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
        <div>
            An Ad will go here
        </div>
    );
};

export default SingleBlogPostAd;