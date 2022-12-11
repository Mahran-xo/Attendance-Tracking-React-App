/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link} from 'react-router-dom'



export default function Homepage() {
  return (

    <><h1 className='text-4xl font-bold text-center py-6'>Welcome To Attendance tracking.</h1>
    <div>
   < Link to="/Login">
        <button  className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>sign in</button>
        </Link>
    </div>
    <div>
        <Link to="/SignUp">
        <button className='border w-full my-5 py-2 bg-green-600 hover:bg-indigo-500 text-white'>create an account</button>
        </Link>
    </div>
   

   </>


  




  )



};