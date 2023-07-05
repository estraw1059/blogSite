import React, {useState, useEffect} from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import db, {auth} from '../../Firebase';
import { doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./BlogPost.css";
import SideBar from '../SideBar/SideBar';

function BlogPost() {
    const { id } = useParams();
    const [blogData, setBlogData] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const docRef = doc(db, 'blogPost', id);
                getDoc(docRef).then((doc) => {
                    setBlogData(doc.data());
                });

            } catch (error) {
                console.error('Error getting blog post', error);
                setBlogData(null);
            }
        }
        getDocumentById();
        const adminListener = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => {
            adminListener();
        }
        }, [id]);

        const onEditClick = () => {
            navigate(`/blog/${id}/edit`)
        }

    if (blogData != null) {
        return (
            <Container fluid="true" className="no-gutters">
                {user ? 
                (<Row className='m-2'>
                    <Col md={10}>
                    </Col>
                    <Col md={2}>
                        <Button onClick={onEditClick} variant="primary">Edit</Button>
                    </Col>
                </Row>) : <></>}
                <Row className='no-gutters row-container'>
                    <Col className="column-container" md={2}>
                        <div className='column-container'>
                            <SideBar/>
                        </div>
                    </Col>
                    <Col md={10}>
                        <Card className="d-flex flex-column">
                            <Card.Body className="flex-grow-1">
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
