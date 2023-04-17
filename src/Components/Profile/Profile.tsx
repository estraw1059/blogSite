import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
    return (
        <section className='page'>
            <Container>
                <Row>
                    <Col xs = {12} md={4}>
                        <Image src='me.jpg' alt="Profile Image" className='profileImage' fluid/>
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>Eric Straw</h1>
                        <h4>Web Developer</h4>
                        <p>
                        I am a senior software engineer with full-stack capabilities and a passion for teaching. I earned my undergraduate degree in Mechanical Engineering and Math from SMU, where I honed my problem-solving skills and developed a strong foundation in mathematics. My experience as a Senior Software Engineer gave me the opportunity to develop and implement innovative solutions to complex technical challenges. While working I pursued a Master's degree in Computer Science to expand my knowledge and skills.

In addition to my work in industry, I am also an adjunct professor at Southern Methodist University, where I teach introductory classes in computer science. I am committed to helping the next generation of engineers and developers succeed, and I believe that education is one of the most powerful tools we have for making a positive impact on the world.

I am always seeking new challenges and opportunities to learn and grow as a software engineer, and I am excited about the possibility of collaborating with others who share my passion for innovation and creativity.
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default Profile;