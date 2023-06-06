import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './BlogCard.css'

//Single Blog Card
const BlogCard = (props) => {
    const {blog} = props;
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`${blog.id}`);
    }

    return (
        <Card onClick={handleClick} className='blogCard'>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.summary}</Card.Text>
        </Card.Body>
      </Card>
    );
};

export default BlogCard;