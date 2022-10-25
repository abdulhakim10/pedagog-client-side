import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [subjectName, setSubjectName] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subject-name')
        .then(res => res.json())
        .then(user => setSubjectName(user))
    },[])
    return (
        <div>
            <h4>Subject Name</h4>
            {
                subjectName.map(subject => <p key={subject.id}>
                    <Link to={`/subject/${subject.id}`}>{subject.name}</Link>
                </p> )
            }
        </div>
    );
};

export default LeftSideNav;