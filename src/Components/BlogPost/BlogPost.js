import React, {useState, useEffect} from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import db from '../../Firebase';
import { doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const docRef = doc(db, 'blogPost', id);
                getDoc(docRef).then((doc) => {
                    console.log(doc.data(), doc.id);
                    setBlogData(doc.data());
                });

            } catch (error) {
                console.error('Error getting blog post', error);
                setBlogData(null);
            }
        }
        getDocumentById();

        }, [id]);
    if (blogData != null) {
        return (
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        <div>A side bar</div>
                    </Col>
                    <Col md={10}>
                        <Card className="my-4">
                            <Card.Body>
                                <Card.Title>{blogData.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{blogData.authorName}</Card.Subtitle>
                                <Card.Text>{blogData.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <div>Looking for blog post</div>
        )
    }
}

export default BlogPost;
