import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
    const { name, description, img } = subject;
    return (
        <div className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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