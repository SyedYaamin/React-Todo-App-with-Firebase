import React from 'react'
import { Link } from 'react-router-dom'

const Todo = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-10'>
        <div className='flex flex-col justify-center items-center min-w-[600px] min-h-[450px] rounded-2xl bg-gray-300 shadow-md shadow-black mx-20 px-10'>
          <h1 className='text-5xl font-bold'>Todo App</h1>
          <input className='w-full mt-10 h-10 bg-transparent border-2 border-black rounded-xl p-3 outline-none text-black placeholder:text-gray-600 placeholder:font-medium' type="text" placeholder='Add Todo' /><br />
          <button className="px-5 py-2 rounded-lg bg-gray-400 font-medium text-xl border-2 border-black text-black hover:text-gray-400 hover:bg-black hover:border-gray-400">Add Todo</button>
          <div className='w-full p-2 mt-5'>
            <ul>
              <li className='p-2 bg-transparent border-2 border-black px-5 text-lg font-medium rounded-3xl text-black mt-2'>Hello World <span></span></li>
              <li className='p-2 bg-transparent border-2 border-black px-5 text-lg font-medium rounded-3xl text-black mt-2'>Hello World <span></span></li>
              <li className='p-2 bg-transparent border-2 border-black px-5 text-lg font-medium rounded-3xl text-black mt-2'>Hello World <span></span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo