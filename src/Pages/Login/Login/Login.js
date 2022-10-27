import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoMarkGithub} from "react-icons/go";
import {CgGoogle} from "react-icons/cg";
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { logIn, googleSignIn, githubSignIn, setUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value


        await logIn(email, password)
        await form.reset('')
        navigate(from, {replace: true})
            // .then(result => {
            //     const user = result.user;
            //     console.log(user)
            //     setError('');
            //     form.reset('');
                
            //     setUser(user)
            //     navigate(from, {replace: true})


            // })
            // .catch(e => {
            //     console.error(e);
            //     setError(e.message);
            // })
           
    }

    const handleGoogleSignIn = async() => {
        const user = await googleSignIn()
        await setUser(user)
        await setLoading(false)
        // .then((user) => {})
        // .catch(e => console.error(e));
        navigate(from, {replace: true})
    }

    const handleGithubSignIn = async() => {
        const user = await githubSignIn()
        await setUser(user)
        await setLoading(false)
        // .then(() => {})
        // .catch(error => console.error(error));
        navigate(from, {replace: true})
    }

    return (
        <div className=' border-2 border-slate-900 bg-slate-50 rounded-lg my-8 mx-auto md:w-1/2'>
            <div className='mt-8 mb-4'>
                <h2 className='text-3xl font-bold text-center'>Login Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-10">
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
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
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
                <Button color={'dark'} type="submit">
                    Login
                </Button>
                <p className='text-red-500'>{error}</p>
                <p>New User. Please go to <Link to='/register'><u className='text-blue-600'>Register</u></Link></p>
            </form>
            <div className='mx-8 mb-8 px-4 pb-4  bg-slate-200 rounded-lg'>
               <h4 className='mt-2 p-2 text-lg text-center'>Otherwise Continue With</h4>
                <Button onClick={handleGoogleSignIn} className='w-full'
                color='dark'>
                    <CgGoogle className='text-2xl mr-2'/> Google
                </Button>
                <h4 className='text-xl font-bold text-center'>Or</h4>
                <Button onClick={handleGithubSignIn} className='w-full'
                color='dark'>
                    <GoMarkGithub className='text-2xl mr-2'/> Github
                </Button>
                
            </div>
        </div>
    );
};

export default Login;