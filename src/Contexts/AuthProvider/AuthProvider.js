import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // function for createUser with email-password
    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for Login with email-password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, setUser, createUser, logIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;