import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="Your name"
      />
    </div>
    <TextInput
      id="name"
      type="text"
      placeholder="enter your name"
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
      type="email"
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
    );
};

export default Register;