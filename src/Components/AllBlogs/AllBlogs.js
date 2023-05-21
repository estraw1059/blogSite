import React from 'react';
import BlogCard from '../BlogCard/BlogCard';


/**
 * Show all blog post as small clickable cards
 */
const AllBlogs = () => {
    const dummyBlog = {
        "title": "Blog Title",
        "id": "1234",
        "summary": "A short summary",
        "datePosted": "12-01-2023"
    };
    
    return (
        <div>
            <BlogCard blog={dummyBlog}/>
        </div>
    );
};

export default AllBlogs;