import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import AuthContext from './Authcontext';

const AuthProvider = (props) => {

    const {children} = props || {};
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const loginUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        loginUser,
        loginUserWithGoogle,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;