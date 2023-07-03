import React from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Firebase';
import { collection, orderBy, getDocs, query, where, limit} from 'firebase/firestore';
import { useEffect } from 'react';


const SideBar = () => {
    const { id } = useParams();

    //Get 5 Most Recent post that aren't the current one
    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const q = query(collection(db, 'blogPost'), where("id","!=",id), limit(5), orderBy("title"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                });

            } catch (error) {
                console.error('Error getting blog post', error);
            }
        }
        getDocumentById();
    }, [id])


    return (
        <div>
            
        </div>
    );
};

export default SideBar;