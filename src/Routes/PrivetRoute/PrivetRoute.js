import { Spinner } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);
    if(loading){
        return <Spinner
        aria-label="Extra large spinner example"
        size="xl"
      />
    }
    

    if(user === null){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRoute;