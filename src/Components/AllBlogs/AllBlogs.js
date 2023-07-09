import React, {useState, useEffect} from 'react';
import BlogCard from '../BlogCard/BlogCard';
import db from '../../Firebase';
import { collection, query, limit, getDocs} from 'firebase/firestore';


/**
 * Show all blog post as small clickable cards
 */
const AllBlogs = () => {
    const [blogPost, setBlogPost] = useState([]);
    useEffect(
        () => {
            const getBlogData = async () => {
                const blogPostsRef = collection(db, 'blogPost');
                const q = query(blogPostsRef, limit(20));
                const querySnapshot = await getDocs(q);
                setBlogPost(querySnapshot.docs.map((doc => {
                    const tempData = doc.data();
                    return {
                        id: doc.id,
                        ...tempData
                    }
                })));
            }
            getBlogData();
        }, []);
    
    if (blogPost.length === 0) {
        return <></>
    }


    return (
        <>
            {blogPost.map(blog => <BlogCard blog={blog}/>)}
        </>
    );
};

export default AllBlogs;