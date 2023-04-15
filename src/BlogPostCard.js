import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogPostCard = (props) => {
    return (
        <Card bg="dark" text="white" style={{ margin: '10px' }}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    );
};

export default BlogPostCard;