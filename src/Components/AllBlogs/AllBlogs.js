import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BlogCard from '../BlogCard/BlogCard';
import db, {auth} from '../../Firebase';
import { collection, query, limit, getDocs} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');


/**
 * Show all blog post as small clickable cards
 */
const AllBlogs = () => {
    const [blogPost, setBlogPost] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
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
            const adminListener = onAuthStateChanged(auth, (user) => {
                setUser(user);
            });
            return () => {
                adminListener();
            }
        }, []);
    
    if (blogPost.length === 0) {
        return <></>
    }

    const newPostCreation = () => {
        const newPostId = uuidv4();
        navigate(`${newPostId}/edit`, { state: { param: 'new' } });
    }


    return (
        <Container>
            {user ? 
                (<Row className='m-2'>
                    <Col md={10}>
                    </Col>
                    <Col md={2}>
                        <Button onClick={newPostCreation} variant="primary">Create New Post</Button>
                    </Col>
                </Row>) : <></>
            }
            {blogPost.map(blog => <Row><BlogCard blog={blog}/></Row>)}
        </Container>
    );
};

export default AllBlogs;