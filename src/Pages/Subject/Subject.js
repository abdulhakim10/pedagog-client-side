import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Subject = () => {
    const subject = useLoaderData();
    const {name, img} = subject;
    return (
        <div className='bg-yellow-200 py-10'>
            <div className="max-w-sm mx-auto">
  <Card>
  <img className='w-full h-60 rounded-lg border' src={img} alt="" />
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  <Link to={`/checkout/${subject.id}`}>
  <Button>
    Get Premium
  </Button>
  </Link>
  </Card>
</div>
        </div>
    );
};

export default Subject;