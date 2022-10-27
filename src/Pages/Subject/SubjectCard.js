import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
    const { name, img, description} = subject;
    return (
        <div className="max-w-sm mb-6 md:mb-0">
            <Card>
                    <img className='w-full h-60 rounded-lg border' src={img} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                {description.slice(0, 250) + '...'}
                </p>
                <Link
                    to={`/subject/${subject.id}`
                    }>
                    <Button>
                        Details
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default SubjectCard;