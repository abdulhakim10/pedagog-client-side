import React from 'react';

const HomeBody = ({subject}) => {
    const {name, img} = subject;
    return (
        <div>
           <div className='p-16 bg-slate-900 rounded-lg'>
                    <img className='h-60 w-60 rounded-full mx-auto' src={img} alt="" />
                    <h4 className='text-2xl mt-8 text-cyan-300 text-center font-serif'>Subject Name: {name}</h4>
                </div>
        </div>
    );
};

export default HomeBody;