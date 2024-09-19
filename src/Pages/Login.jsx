import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Config";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const loginUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/todo');
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
          <h1 className='text-5xl font-bold'>Login</h1>
          <form className='flex flex-col justify-center items-center w-full' onSubmit={loginUser}>
            <input className='w-full mt-10 h-10 bg-transparent border-2 border-black rounded-xl p-3 outline-none text-black' type="email" placeholder='Email' ref={email} /><br />
            <input className='w-full h-10 bg-transparent border-2 border-black rounded-xl p-3 outline-none text-black' type="text" placeholder='Password' ref={password} /><br />
            <button className="px-5 py-2 rounded-lg bg-gray-400 font-medium text-xl border-2 border-black text-black hover:text-gray-400 hover:bg-black hover:border-gray-400">Login</button>
            <p className='mt-2'>Not a User? <span className='text-indigo-700 cursor-pointer'><Link to={"/signup"}>Signup</Link></span></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login