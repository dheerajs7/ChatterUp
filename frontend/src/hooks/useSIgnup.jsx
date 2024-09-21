import React, { useState } from 'react';
import { useAuthContext } from '../context/authContext';
import toast from 'react-hot-toast';
 
const handleInputErrors=({ username,email,password,gender})=>{
    if(!username || !email || !password || !gender  ){
        toast.error("Please fill all the fields ")
        return true
    }
    return false
}

const useSignUp = () => {
  
    const[loading,setLoading] =useState(false)
    const {setAuthUser} =useAuthContext()


    const signUp =async({username,email,password,gender})=>{
        const checkError = handleInputErrors({
            username,
            email,
            password,
            gender

        }

    )

    if (checkError){
        return
    }

    try {
        setLoading(true)
 
        const res =await fetch("/api",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({
                username,
                email,
                password,
                gender
           })
        }
        )
        const data = await res.json()
        if(data.error){
            throw new Error("data.error");
            
            }
            console.log(data);

            localStorage.setItem("user",JSON.stringify(data))
            setAuthUser(data)
            
    }
     catch (error) {
     toast.error(error.message)   
    }
    finally{
        setLoading(false)
    }
    }

    return {loading,signUp}

}

export default useSignUp;
