import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from '../component/GenderCheckbox';
import useSignUp from '../hooks/useSIgnup';


const SignUp = () => {

    const [formData,setFormData]= useState({
        username:"",
        email:"",
        password:"",
        gender:""
    })

    const {signUp} =useSignUp()

    const handleCheckboxChange=(gender)=>{
        setFormData({...formData,gender})

    }
     
    const handleSubmit= async(e)=>{
        e.preventDefault()

        await signUp(formData)

        // }
    }




  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-200'>
    <h1 className='text-lg font-bold  text-center mb-4'>SignUp to
    <span className='text-blue-700'> ChatterUp</span>
    </h1>
     
     <form onSubmit={handleSubmit}>

     <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' 
            className='input input-bordered w-full  h-10 max-w-xs'
            value={formData.username} 
              onChange={(e)=>
              setFormData({...formData,username:e.target.value})
              }/>
        </div>

        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Email</span>
            </label>
            <input type='email' placeholder='Enter Your Email' className='input input-bordered w-full  h-10 max-w-xs'
             value={formData.email} 
              onChange={(e)=>
              setFormData({...formData,email:e.target.value})
              }/>
             
        </div>

        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Your Password' className='input input-bordered w-full  h-10 max-w-xs' 
                value={formData.password}
                onChange={(e)=>
                setFormData({...formData,password:e.target.value})
                }
            />
        </div>
        <GenderCheckbox onCheckboxChange ={handleCheckboxChange}
            selectedGender={formData.gender} 

            />
        
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
