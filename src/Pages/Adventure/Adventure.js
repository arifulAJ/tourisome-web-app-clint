import React, { useRef } from 'react';

const Adventure = () => {
    const nameRef=useRef();
    const emailRef=useRef();
    const handelSubmit=e=>{
        e.preventDefault();
        const name=nameRef.current.value
        const email=emailRef.current.value
      
        const newUser={name,email}
        console.log(newUser);
        fetch('https://boiling-meadow-47168.herokuapp.com/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)

        })
        .then()
    }
    return (
        <div>
            <h1> this is adventure place </h1>
            <form  onSubmit={handelSubmit}>
                <input type="text" name="" id="" ref={nameRef} />
                <input type="email" name="" id="" placeholder='email'   ref={emailRef}/>
                <input type="submit" value="submit here" />
            </form>
        </div>
    );
};

export default Adventure;