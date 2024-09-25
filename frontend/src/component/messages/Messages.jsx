
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import { useEffect, useRef } from 'react';

const Messages = () => {
const {messages,loading} = useGetMessages()

const lastMessages = useRef()

useEffect(()=>{
  setTimeout(()=>{
    lastMessages.current?.scrollIntoView({ behaviour: "smooth"})
  })
},[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-500'>Send Message</p>
      )}
      {!loading && messages.length > 0 && messages.map((message)=>(
          <div key={message._id} ref={lastMessages}>
            <Message message ={message}/>
          </div>
      ))} 
  
    </div>
  );
}

export default Messages;
