import React, { useEffect, useState } from 'react';
import Skill from '../Components/Skill/Skill';
import db from '../Firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const AboutMe = () => {
    const [skills, setSkills] = useState([]);
    useEffect(
        () =>
        onSnapshot(collection(db, 'skills'), (snapshot) => {
            setSkills(snapshot.docs.map(doc => doc.data()));
        }), []);

    return (
        <div>
            This is a page about me. I should put my resume here

            {skills.map((skill) => {
                return <Skill skillName={skill.skill} skillPercent={skill.skillPercent}/>
            })}
        </div>
    );
};

export default AboutMe;