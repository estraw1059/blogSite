import React, {useState, useEffect} from 'react';
import { Container, Card } from 'react-bootstrap';
import db from '../../Firebase';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const docRef = db.collection('blogPost').doc(id);
                const documentSnapshot = await docRef.get();

                if (documentSnapshot.exists) {
                    const data = documentSnapshot.data();
                    setBlogData(data);
                } else {
                    console.log('Document not found');
                    setBlogData(null);
                }
            } catch (error) {
                console.error('Error getting blog post', error);
                setBlogData(null);
            }
        }
        getDocumentById();

        }, []);
    if (blogData != null) {
        return (
            <Container>
                <Card className="my-4">
                    <Card.Body>
                    <Card.Title>{blogData.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{blogData.authorName}</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquet massa, eu gravida dui. Sed luctus lectus vel tincidunt efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Maecenas ullamcorper elementum purus at pharetra. Aenean sit amet tellus eget velit bibendum tincidunt nec at justo.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    } else {
        return (
            <div>Looking for blog post</div>
        )
    }
}

export default BlogPost;
