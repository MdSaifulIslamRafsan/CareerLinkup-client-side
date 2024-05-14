import {  onAuthStateChanged,  signInWithPopup, signOut , GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import Swal from 'sweetalert2'
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader , setLoader] = useState(true);
  

      const googleProvider = new GoogleAuthProvider();
      const handleGoogleLogin = (navigate , location) => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
        .then(() => {
            navigate(location?.state ? location?.state : '/' )
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
    
      const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const loginAccount = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
     


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
            if(currentUser){
              const loggedEmail = {email : currentUser.email}
              
              axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedEmail , {withCredentials: true})
              .then(res => {
                // console.log(res.data);
              })
            }
          });
          return () => {
            unSubscribe();
          };
    },[]);

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            axios(`${import.meta.env.VITE_API_URL}/logout` , {withCredentials:true})
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

    const userInfo = {user , loader , handleGoogleLogin , handleLogout , loginAccount , createAccount};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;