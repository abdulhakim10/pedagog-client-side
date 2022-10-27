import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

// Google Provider
const googleProvider = new GoogleAuthProvider();

// Github Provider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User with email-password
    const createUser= async(email, password) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser)

    }

    // User Profile update
    const profileUpdate = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    // Sign In With Google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // Sign In with Github
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    
    // Login with email-password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // function for Logout
    const logOut = async() => {
        setLoading(true);
        await signOut(auth);
        setUser(null);
    }

    // Observation
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state changed', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return unSubscribe();
    },[])

    // Send Values
    const authInfo = {
        user,
        loading,
        setUser, 
        setLoading,
        createUser, 
        googleSignIn, 
        githubSignIn, 
        profileUpdate, 
        logIn, 
        // verifyEmail,
        logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;