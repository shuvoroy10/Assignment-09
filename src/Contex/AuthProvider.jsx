import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContex = createContext();
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email)
}
const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }

const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
}

const logOut = () => {
    return signOut(auth);
}

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authData = {
        user, setUser, createUser, logOut, signIn, loading, setLoading, updateUser, signInWithGoogle, passwordReset
    }
    // console.log(user)
    return (
        <AuthContex value={authData}>{children}</AuthContex>
    );
};

export default AuthProvider;