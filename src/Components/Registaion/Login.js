import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Pages/Firbase/UseFirbase/UseFirebase';

const Login = () => {
    const {user,setUser,signInWithEmail,signOutPlace}=useFirebase();
    const emailRef=useRef();
    const passwordRef=useRef();
    const handelSignInWithEmail=(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
     
        signInWithEmail(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

    }
    return (
        <div>
             <div className='resisters container-fluid'>
          
          <div className='row row-cols-md-2 row-cols-1 backgrounds'>
                <div className='aboutitme'>
                <h1 className='text-center'>Well come to  our Tourism Agency</h1> 
                </div>
                <div className='borderSite'>
                    <img className='img-fluid' src="https://thumbor.forbes.com/thumbor/625x429/https://specials-images.forbesimg.com/imageserve/5ec567daf2098c0006c6036e/Kimpton-Shanghai-Hotel/960x0.jpg?fit=scale" alt="" />
                </div>
                </div>
                <div className='forms'>
                    <h3 className='text-center pb-3'>Pleace Sign in Here</h3>
                    <form onClick={handelSignInWithEmail}>
                       
                        <input type="email" name="" id="" placeholder='your Email' ref={emailRef} /> <br />
                        <input type="password" name="" id="" placeholder='your Password' ref={passwordRef} /> <br />
                        <input type="submit" value="Sign up" />
                    </form>
                    <button className='googlebtn' onClick={signOutPlace} > Log out</button>
                   <p className='pt-3'><span> if new user pleace Register here? </span><Link to='/resister' > Register</Link></p>
                </div>
        </div>
        </div>
    );
};

export default Login;