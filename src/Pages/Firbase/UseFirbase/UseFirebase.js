import { GoogleAuthProvider,getAuth ,signInWithPopup,createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword ,signOut,updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentic from "../Firebase.init";


initializeAuthentic();
const GoogleProvider = new GoogleAuthProvider();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [admin,setAdmin]=useState(false);

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
         },[]);

        //  admin 
          useEffect(()=>{
            fetch(`https://boiling-meadow-47168.herokuapp.com/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin))
          },[user.email])
         const signOutPlace=()=>{
           
           signOut(auth).then(() => {
             // Sign-out successful.
           }).catch((error) => {
             // An error happened.
           })
         
          }

return{
    user,
    admin,
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