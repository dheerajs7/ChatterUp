import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {

  const {selectedConversation,setSelectedConversation} =useConversation()

useEffect(()=>{
  return ()=> setSelectedConversation(null)
},[setSelectedConversation])

  return (
    <div className='md:min-w-[350px] flex flex-col'>
    {!selectedConversation ? (<NoChatSeleted/>):(
      <>
    <div className='bg-slate-500 px-4 py-2 mb-2'>
    <span className='label-text'>To:</span>
    <span className='text-gray-800 font-bold'>{selectedConversation?.username}</span>
    </div>
    <Messages/>
    <MessageInput/>
    </>
    )}
   
    </div>
  );
}

const NoChatSeleted =()=>{
  

  return (
    <div className='flex items-center justify-center w-full h-full'>
   <div className='px-4 text-center sm:text-lg ms:text-xl text-slate-800
   font-semibold flex flex-col items-center'>
    <p>Welcome </p>
    <p>Start a conversation by selecting a user</p>
   </div>

    </div>
  )
}

export default MessageContainer;
