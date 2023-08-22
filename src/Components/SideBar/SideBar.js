import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import db from '../../Firebase';
import { collection, orderBy, getDocs, query, where, FieldPath, limit, or} from 'firebase/firestore';


const SideBar = () => {
    const { id } = useParams();
    const [sideBarCards, setSideBarCards] = useState([]);
    const navigate = useNavigate();
    
    const switchPost = (id) => {
        navigate(`/blog/${id}`);
    }


    //Get 5 Most Recent post that aren't the current one
    useEffect(() => {
        //, where("id","!=",id), limit(5), orderBy("id", "title")
        const getDocuments = async () => {
            try {
                const q = query(collection(db, 'blogPost'), limit(5), where('id', '!=', id));
                const querySnapshot = await getDocs(q);
                const cardList = [];
                querySnapshot.forEach((doc) => {
                    cardList.push(doc.data());
                });
                setSideBarCards(cardList);

            } catch (error) {
                console.error('Error getting blog post', error);
            }
        }
        getDocuments();
    }, [id])


    return (
        <div>
            {sideBarCards.map((post, index) => {
                return (
                    <Card onClick={() => switchPost(post.id)} key={index}>
                        <Card.Body>
                            <h5>{post.title}</h5>
                            <p>{post.text}</p>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default SideBar;