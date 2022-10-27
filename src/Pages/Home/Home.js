import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBody from './HomeBody';

const Home = () => {
    const subjectName = useLoaderData();
    return (
        <div className='mb-8'>
           <div className=" bg-center h-96 rounded-lg bg-no-repeat bg-cover pt-24 md:p-20 mt-12" style={{backgroundImage: `url('https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2020/09/03103530/sl_education_report_featured-800x450.jpg')`}}>
            <p className='text-xl font-medium text-center text-cyan-200'>Learn The Art of Learning...</p>
            <p className='text-xl font-medium text-center text-cyan-200'>With</p>
            <h1 className='md:text-8xl text-6xl font-serif text-cyan-300 text-center'>Pedagog</h1>
           </div>
           <div className='grid md:grid-cols-3 mt-8 grid-cols-1 gap-4'>
                {
                    subjectName.map(subject => <HomeBody
                    key={subject.id}
                    subject={subject}
                    ></HomeBody>)
                }
           </div>
        </div>
    );
};

export default Home;