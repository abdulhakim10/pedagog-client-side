import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // function for createUser with email-password
    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for User Profile update
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    
    // function for Login with email-password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // function for Logout
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state changed', currentUser);
            setUser(currentUser);
        })
        return unSubscribe();
    },[])

    const authInfo = {user, setUser, createUser, profileUpdate, logIn, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;