import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    // function for createUser with email-password
    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for User Profile update
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Sign In With Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // Sign In with Github
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }
    
    // function for Login with email-password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // function for Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state changed', currentUser);
            setUser(currentUser);
        })
        return unSubscribe();
    },[])

    const authInfo = {
        user, 
        setUser, 
        createUser, 
        googleSignIn, 
        githubSignIn, 
        profileUpdate, 
        logIn, 
        logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;