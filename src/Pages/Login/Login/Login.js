import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn, setUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
            form.reset('');
            
        })
        .catch(e => console.error(e));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
  <Button type="submit">
    Login
  </Button>
  <p>New User. Please go to <Link to='/register'>Register</Link></p>
</form>
    );
};

export default Login;