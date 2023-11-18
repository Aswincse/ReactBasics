import React, {useState} from 'react';

export default function UseState(props) {
    const [student,setStudent]=useState({age:13, name:"sam"})
    return (
        <div>
            <h1>{student.age}  {student.name}</h1>
        </div>
    );
}

