import { useSocketContext } from '../../context/socketContext';
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation,lastIndex}) => {
 
 
    const {selectedConversation,setSelectedConversation} =useConversation()
   const isSelected =selectedConversation?._id === conversation._id 

   const {onlineUsers} =useSocketContext()

   const isOnline =onlineUsers.includes(conversation._id)
  return (
    <>    <div className={`flex gap-2 items-center hover:bg-blue-500 
    rounded p-2 py-2 cursor-pointer ${isSelected ? "bg-sky-500" : " "}
     `}
     onClick={()=> setSelectedConversation(conversation)}
     >
    <div className={`avatar ${isOnline? "online" : " "}`}>
        <div className='w-12 rounded-full'>
            <img src='https://cdn-icons-png.flaticon.com/512/6858/6858504.png' />
        </div>
    </div>

  
    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-slate-700'>{conversation.username}</p>
        {/* <span className='text-xl'>just now</span> */}
        </div>
    </div>
    </div>
    </>
 
  );
}

export default Conversation;
