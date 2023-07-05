import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import db from '../../Firebase';
import { collection, orderBy, getDocs, query, where, limit} from 'firebase/firestore';


const SideBar = () => {
    const { id } = useParams();
    const [sideBarCards, setSideBarCards] = useState([]);

    //Get 5 Most Recent post that aren't the current one
    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const q = query(collection(db, 'blogPost'), where("id","!=",id), limit(5), orderBy("id", "title"));
                const querySnapshot = await getDocs(q);
                const cardList = [];
                console.log(querySnapshot);
                querySnapshot.forEach((doc) => {
                    cardList.append(doc);
                });
                setSideBarCards(cardList);

            } catch (error) {
                console.error('Error getting blog post', error);
            }
        }
        getDocumentById();
    }, [id])

    console.log(sideBarCards);


    return (
        <Card>
            <Card.Title>{sideBarCards.legnth > 0 ? sideBarCards[0].title: "Loading"}</Card.Title>
        </Card>
    );
};

export default SideBar;