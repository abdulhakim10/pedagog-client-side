import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Subject from '../Subject/Subject';
import SubjectCard from '../Subject/SubjectCard';

const Courses = () => {
    const subjects = useLoaderData();
    // console.log(subjects)
    return (
        <div className='md:grid grid-cols-4 gap-4 mt-8'>
            <div className='border p-8'>
              <LeftSideNav></LeftSideNav>
            </div>
            <div className='border col-span-3 md:grid grid-cols-3 p-8 gap-4'>
                {
                    subjects.map(subject => <SubjectCard 
                    key={subject.id}
                    subject={subject}
                    ></SubjectCard>
                   )
                }
            </div>
        </div>
    );
};

export default Courses;