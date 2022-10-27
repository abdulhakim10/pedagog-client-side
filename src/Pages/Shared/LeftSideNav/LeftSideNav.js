import { ListGroup } from 'flowbite-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [subjectName, setSubjectName] = useState([]);

    useEffect(() => {
        fetch('https://pedagog-learning-assignment-server.vercel.app/subject-name')
        .then(res => res.json())
        .then(user => setSubjectName(user))
    },[])
    return (
        <div className='border p-10 rounded-lg mx-auto'>
            <h4 className='text-xl font-medium text-center mb-4'>Subjects Name</h4>
            {
                subjectName.map(subject => <ListGroup className='mb-2'
                key={subject.id}>
                    <Link to={`/subject/${subject.id}`}>
                    <ListGroup.Item>
                        {subject.name}
                    </ListGroup.Item>
                    </Link>
                </ListGroup>)
            }
        </div>
    );
};

export default LeftSideNav;