import React from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {Array.isArray(conversations) && conversations.map((conversation, index) => (
        <Conversation 
          key={conversation._id} 
          conversation={conversation} 
          lastIndex={index === conversations.length - 1} // Fixed from `conversation.length` to `conversations.length`
        />
      ))}
      {loading && (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
}

export default Conversations;

















// import React from 'react';
// import Conversation from './Conversation';
// import useGetConversation from '../../hooks/useGetConversation';

// const Conversations = () => {
// const {loading,conversations} =useGetConversation();
// // console.log(conversations);



//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//     {conversations.map((conversation,index)=>(
//       <Conversation key={conversation._id} 
//       conversation={conversation} 
//       lastIndex={index === conversation.length - 1}

//       />
//     ))}
//      {
//       loading ? (
//         <span className='loading loading-spinner'></span>
//        ):null

//      }
//     </div>
    
//   );
// }

// export default Conversations;
