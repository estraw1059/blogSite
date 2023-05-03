import React from 'react';
import {Image} from 'react-bootstrap';
import './UnderConstruction.css';


const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <Image src="https://img.icons8.com/officel/80/null/under-construction.png" fluid/>
      <h2>Site Under Construction</h2>
      <p>We're sorry, this page is currently under construction. Please check back later!</p>
    </div>
  );
};

export default UnderConstruction;
