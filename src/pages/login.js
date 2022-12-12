import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const userN = () =>{
    const [Title,setuser] = useState([]);
}

const passW = () =>{
    const [title,setpass] = useState([]);
}

const handleSubmit = (e) =>{
    e.preventDefault()
    const login = {username,password}
    fetch('http://localhost8000/ATTENDANCE-TRACKING-REACT-APP')
    method: 'GET'
   



}
function Dashboard() 
    function renderFn({ location }) 
      
      if (!Userfront.accessToken()) {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }

      function Dashboard() 
        function renderFn({ location }) 
          // If the user is not logged in, redirect to login
          if (!Userfront.accessToken()) {
            return (
              <link 
                to={{
                  pathname: "/StudentDashhboard",
                  state: { from: location },
                }}
              />
            );
          }


export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>Attendance tracking.</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input onChange={(u) => setTitle(u.target.value)}
                    className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input onChange={(p) => settitle(p.target.value)}
                     className='border p-2' type="password" />
                </div>
                <button onSubmit={handleSubmit}
                className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                     
                        <Link to = "/SignUp">
                     <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>create an account </button>
                     </Link>
                       
                </div>
            </form>
        </div>
    </div>

    
  )
}
