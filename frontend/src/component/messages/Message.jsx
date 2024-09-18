import React from 'react';

const Message = () => {
  return (
    <div className=' chat chat-end'>
    <div className='chat-image avatar'>
        <div className='w-10 rouded-full'>
            <img src=" https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="Uavtar"/>       
        </div>
    </div>
      
      <div className='chat-bubble text-white bg-blue-500'>
       Hello
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950'>10:41</div>
    </div>
  );
}

export default Message;
