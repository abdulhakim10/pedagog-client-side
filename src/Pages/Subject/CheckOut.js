import { Button, Card , Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const subject = useLoaderData();
    const { user } = useContext(AuthContext);
    const { name, img, description, price } = subject;
    console.log(subject)
    return (
        <div className='md:flex gap-6 my-8'>
            <div className="w-full">
                <Card>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Your Name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                readOnly
                                defaultValue={user?.displayName}
                                type="text"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                readOnly
                                defaultValue={user?.email}
                                type="email"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="payment"
                                    value="Debit or Credit Card"
                                />
                            </div>
                            <TextInput
                                id="payment"
                                type="text"
                                placeholder='please enter your card number'
                                required={true}
                            />
                        </div>
                        <Button type="submit">
                            Enroll
                        </Button>
                    </form>
                </Card>
            </div>
            <div>
                <div className='w-full'>
                    <Card>
                        <div className='md:flex gap-10'>
                            <img className='md:w-2/5 w-full' src={img} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>{name}</h4>
                                <p>{description}</p>
                                <p>Price:{price}</p>
                            </div>
                        </div>
                    </Card>
                    
                </div>
            </div>
        </div>
    );
};

export default CheckOut;