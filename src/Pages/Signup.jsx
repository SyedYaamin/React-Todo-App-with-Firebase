import React, { useRef } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Config";
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const newUser = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/")
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  }

  return (
    <>
      <div className='flex justify-center items-center mt-10'>
        <div className='flex flex-col justify-center items-center w-[450px] min-h-[450px] rounded-2xl bg-gray-300 shadow-md shadow-black mx-20 px-10'>
          <h1 className='text-5xl font-bold'>Signup</h1>
          <form className='flex flex-col justify-center items-center w-full' onSubmit={newUser}>
            <input className='w-full mt-10 h-10 bg-transparent border-2 border-black rounded-xl p-3 outline-none text-black' type="text" placeholder='Username' /><br />
            <input className='w-full h-10 bg-transparent border-2 border-black rounded-xl p-3 outline-none text-black' type="email" placeholder='Email' ref={email} /><br />
            <input className='w-full h-10 bg-transparent border-2 border-black rounded-xl p-3 outline-none text-black' type="text" placeholder='Password' ref={password} /><br />
            <button className="px-5 py-2 rounded-lg bg-gray-400 font-medium text-xl border-2 border-black text-black hover:text-gray-400 hover:bg-black hover:border-gray-400">Signup</button>
            <p className='mt-2'>Already a User? <span className='text-indigo-700 cursor-pointer'><Link to={"/"}>Login</Link></span></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;