import React from 'react';

const Conversation = () => {
  return (
    <>    <div className='flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-2 cursor-pointer'>
    <div className='avatar online'>
        <div className='w-12 rounded-full'>
            <img src='https://cdn-icons-png.flaticon.com/512/6858/6858504.png' />
        </div>
    </div>

  
    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-slate-700'>Dheeraj</p>
        {/* <span className='text-xl'>just now</span> */}
        </div>
    </div>
    </div>
    </>
 
  );
}

export default Conversation;
