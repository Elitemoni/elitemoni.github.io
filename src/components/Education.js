import React from 'react';
import degreeImage from '../images/AssociateDegree.jpg';

const Education = () => {
  return (
    <div className="education-container">
      <div>Education:</div>
      <div className="degree-pic-container">
        <img className="degree-pic" src={degreeImage} />
      </div>
      <div>That's not all! Well.. I am currently working on my bachelor's at the University of Phoenix!</div>
    </div>
  )
}

export default Education