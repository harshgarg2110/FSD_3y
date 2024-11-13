
import React from "react";
import Marks from "./Marks";

const Display = () => {
    const Student = [
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahu", roll: 646462, m1: 46, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56}
    ];
  return (
    <div>
        {
            Student.map((Student, index) =>
            {return(
                <Marks key={index}
                name={Student.name}
                roll={Student.roll}
                m1={Student.m1}
                m2={Student.m2}
                m3={Student.m3} />
            )})
        }
      
    </div>
  );
};

export default Display;