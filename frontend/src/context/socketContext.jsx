import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './authContext';
import {io} from "socket.io-client"

const socketContext = createContext()

export const useSocketContext =()=>{
    return useContext(socketContext)
}

export const SocketContextProvider =({children})=>{
    const [socket,setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] =useState([])
    const {authUser}= useAuthContext()

     useEffect(()=>{
        if(authUser){
         const socket = io("http://localhost:3000",{
            query:{
                userId:authUser.validUser._id

            }
        }
         )

         setSocket(socket)

         socket.on("getOnlineUsers",(users)=>{
            setOnlineUsers(users)
         })

         return () => socket.close()
        }else{

            if(socket){
                socket.close()
                setSocket(null)
            }
        }
     },[authUser])
   
     return (
        <socketContext.Provider value ={{socket,onlineUsers}}>
          {children}
        </socketContext.Provider>
     )
}

export default socketContext;
