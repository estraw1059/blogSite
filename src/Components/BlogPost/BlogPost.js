import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
    return (
        <Container>
        <Card className="my-4">
            <Card.Body>
            <Card.Title>Blog Post Title of Id {id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Author Name</Card.Subtitle>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquet massa, eu gravida dui. Sed luctus lectus vel tincidunt efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Maecenas ullamcorper elementum purus at pharetra. Aenean sit amet tellus eget velit bibendum tincidunt nec at justo.
            </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default BlogPost;
