
import React, { useEffect } from "react";
import { useAuthContext} from "../../context/authContext"
import useConversation from "../../zustand/useConversation";
import { formatTime } from "../../utils/formatTime";
React

const Message = ({message}) => {

 const{authUser} = useAuthContext()

 const {selectedConversation} = useConversation()

//  useEffect(() => {
//   if (authUser) {
//     console.log("AuthUser:", authUser);
//     console.log("AuthUser ID:", authUser.validUser._id);
//   } else {
//     console.log("authUser is not defined");
//   }
// }, [authUser]);

 const messageFromMe = message.senderId === authUser.validUser._id


//  console.log(authUser._id);
 
 const chatClassName = messageFromMe ? "chat-end":"chat-start"

 const msgbgColor = messageFromMe ? " bg-green-500" : ""

 const formatedTime = formatTime(message.createdAt)

  return (
    <div className={`chat ${chatClassName}`}>
    <div className='chat-image avatar'>
        <div className='w-10 rouded-full'>
            <img src=" https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="Uavtar"/>       
        </div>
    </div>
      
      <div className={`chat-bubble text-white ${msgbgColor}`}>
      {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950'>
      {formatedTime}
      </div>
    </div>
  );
}

export default Message;
