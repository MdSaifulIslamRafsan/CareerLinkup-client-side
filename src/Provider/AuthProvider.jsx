import {  onAuthStateChanged,  signInWithPopup, signOut , GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import Swal from 'sweetalert2'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader , setLoader] = useState(true);
  

      const googleProvider = new GoogleAuthProvider();
      const handleGoogleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
        .then(() => {
            Swal.fire({
              title: "Good job!",
              text: "You have successfully logged into Google.",
              icon: "success",
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessage,
            });
          });
      };
    
   
     


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false);
          });
          return () => {
            unSubscribe();
          };
    },[]);

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            Swal.fire({
              title: "Good job!",
              text: "You've been successfully logged out",
              icon: "success",
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessage,
            });
          });
      };

    const userInfo = {user , loader , handleGoogleLogin , handleLogout};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;