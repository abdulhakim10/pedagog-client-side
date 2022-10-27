import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GrDocumentDownload } from 'react-icons/gr';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Subject = () => {
    const subject = useLoaderData();
    const { name, img, description } = subject;

    return (
        <div className='py-10' ref={ref}>
            <div className="w-full mx-auto border-2 border-slate-900 rounded-lg">
                <Card>
                    <div className='md:grid grid-cols-3 gap-4'>
                        <img className='w-full h-60 rounded-lg border' src={img} alt="" />
                        <div className='col-span-2 p-4'>
                            <div className='flex justify-between'>
                                <h5 className="text-2xl font-bold tracking-tight">
                                    {name}
                                </h5>
                                <Pdf targetRef={ref} filename={name}>
                                    {({ toPdf }) => <button onClick={toPdf}><GrDocumentDownload className='text-3xl'/></button>}
                                </Pdf>
                                
                            </div>
                            
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
                                {description}
                            </p>
                            
                            <Link to={`/checkout/${subject.id}`}>
                                <Button>
                                    Get Premium
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Subject;