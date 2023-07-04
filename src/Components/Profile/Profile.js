import React, {useState, useEffect} from 'react';
import db from '../../Firebase';
import { onSnapshot, doc, collection } from 'firebase/firestore';
import {Container, Row, Col, Image } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    useEffect(
        () => 
        onSnapshot(doc(db, "profile", "Eric"), (snapshot) => {
            setProfile(snapshot.data());
        })
        , []);
    if (profile === null) {
        return <></>
    }
    return (
        <section className='page'>
            <Container>
                <Row>
                    <Col xs = {12} md={4}>
                        <Image src='me.jpg' alt="Profile Image" className='profileImage' fluid="true"/>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>{profile.name}</h1>
                        <h4>{profile.title}</h4>
                        <p>{profile.aboutMe}</p>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default Profile;