import React from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from '../component/GenderCheckbox';
const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-200'>
    <h1 className='text-lg font-bold  text-center mb-4'>SignUp to
    <span className='text-blue-700'> ChatterUp</span>
    </h1>
     
     <form>

     <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='input input-bordered w-full  h-10 max-w-xs' />
        </div>

        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Email</span>
            </label>
            <input type='email' placeholder='Enter Your Email' className='input input-bordered w-full  h-10 max-w-xs' />
        </div>

        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Your Password' className='input input-bordered w-full  h-10 max-w-xs' />
        </div>
        <GenderCheckbox/>
        <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already Registered? Please Login here
        </Link>

        <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-700 font-b text-white'>Sign Up</button>
        </div>
     </form>
    

    </div>
    </div>
  );
}

export default SignUp;
