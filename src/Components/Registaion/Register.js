import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Pages/Firbase/UseFirbase/UseFirebase';
import './Register.css'

const Register = () => {
    const {user,setUser,signInWithGoogles,registerWithEmail,updateName}=useFirebase();
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
console.log(nameRef);
    const hanselRegister= e=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(name,email,password);
        registerWithEmail(email,password)
        .then((userCredential) => {
            // Signed in 
            updateName(name)
            const user = userCredential.user;
            setUser(user)
         
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

    }
    // google sign in 
    const googleHandel=()=>{
        signInWithGoogles()
        .then((result) => {
          
         setUser(result.user)
          // ...
        }).catch((error) => {
          // Handle Errors here.
        
          // ...
        });
    }
    
    return (
        <div className='resisters container-fluid'>
          
          <div className='row row-cols-md-2 row-cols-1 backgrounds'>
                <div className='aboutitme'>
                <h1 className='text-center'>Well come to  our Tourism Agency</h1> 
                </div>
                <div className='borderSite'>
                    <img className='img-fluid' src="https://pix8.agoda.net/hotelImages/2163054/-1/4f3b334212d6cf837f60ee731edf916d.jpg?s=1024x768" alt="" />
                </div>
                </div>
                <div className='forms'>
                    <form onClick={hanselRegister}>
                    <h3 className='text-center pb-3'>Pleace Register in Here</h3>

                        <input type="text" name="" id="" placeholder='your Name'ref={nameRef}  /> <br />
                        <input type="email" name="" id="" placeholder='your Email' ref={emailRef} /> <br />
                        <input type="password" name="" id="" placeholder='your Password' ref={passwordRef} /> <br />
                        <input type="submit" value="Sign up" />
                    </form>
                    <button className='googlebtn' onClick={googleHandel} > sign in with google</button>
                    <p className='pt-3'><span> If Already have an account here? </span><Link to='/login' > sign in</Link></p>
                    {
                        user.displayName
                    }
                </div>
        </div>
    );
};

export default Register;