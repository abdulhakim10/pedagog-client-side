import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { GoMarkGithub} from "react-icons/go";
import {CgGoogle} from "react-icons/cg";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(e => console.error(e));
    }
    return (
        <div className=' border'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className=''>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name='name'
                        placeholder="enter your name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        name='email'
                        placeholder="enter your email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photoURL"
                        type="text"
                        name='photoURL'
                        placeholder="enter photo URL"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        placeholder='enter password'
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Register
                </Button>
                <p>Already Have Account? Please <Link to='/login'>Login</Link></p>
            </form>
            <div>
                <h3>Or</h3>
                <Button className='w-full'
                color='dark'>
                    <CgGoogle className='text-2xl mr-2'/> Google
                </Button>
                <h4 className='text-xl font-bold text-center'>Or</h4>
                <Button className='w-full'
                color='dark'>
                    <GoMarkGithub className='text-2xl mr-2'/> Github
                </Button>
            </div>
        </div>
    );
};

export default Register;