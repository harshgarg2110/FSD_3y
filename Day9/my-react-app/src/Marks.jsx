import React from 'react';
import "./Marks.css";

const Marks = ({name,roll,m1,m2,m3,}) => {
  return (
    <div id='disp'>
      <h1>Studen Profile</h1>
      <h2>Name:{name}</h2>
      <h2>Roll No: {roll}</h2>
      
      <h1>Semester Wise Marks</h1>
      <h2>Semester 1: {m1}</h2>
      <h2>Semester 2: {m2}</h2>
      <h2>Semester 3: {m3}</h2>
      
    </div>
  )
}

export default Marks;