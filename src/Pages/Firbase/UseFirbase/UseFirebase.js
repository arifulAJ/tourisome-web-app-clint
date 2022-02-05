import { GoogleAuthProvider,getAuth ,signInWithPopup,createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword ,signOut,updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentic from "../Firebase.init";


initializeAuthentic();
const GoogleProvider = new GoogleAuthProvider();
const useFirebase=()=>{
    const [user,setUser]=useState({})

    const auth = getAuth();

   const signInWithGoogles=()=>{
      return  signInWithPopup(auth, GoogleProvider)
 
    }
    const registerWithEmail=(email,password)=>{
        return  createUserWithEmailAndPassword(auth, email, password)
       
    }
    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
              // ...
            } else {
              setUser({})
              
            }
           
           
          });
          return ()=>unsubscribe();
         },[])
         const signOutPlace=()=>{
           
           signOut(auth).then(() => {
             // Sign-out successful.
           }).catch((error) => {
             // An error happened.
           })
         
          }

return{
    user,
    setUser,
    signInWithGoogles,
    registerWithEmail,
    signInWithEmail,
    signOutPlace,
    updateProfile,
    auth


}
}
export default useFirebase;