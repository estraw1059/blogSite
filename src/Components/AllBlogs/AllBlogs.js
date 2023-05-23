import React, {useState, useEffect} from 'react';
import BlogCard from '../BlogCard/BlogCard';
import db from '../../Firebase';
import { onSnapshot, collection} from 'firebase/firestore';


/**
 * Show all blog post as small clickable cards
 */
const AllBlogs = () => {
    const [blogPost, setBlogPost] = useState([]);
    useEffect(
        () => {
        return onSnapshot(collection(db, 'blogPost'), (snapshot) => {
            setBlogPost(snapshot.docs.map(doc => {
                const tempData = doc.data()
                return {
                    id: doc.id,
                    ...tempData
                }
            }));
        })}
        , []);
    
    if (blogPost.length === 0) {
        return <></>
    }


    return (
        <div>
            {blogPost.map(blog => <BlogCard blog={blog}/>)}
        </div>
    );
};

export default AllBlogs;