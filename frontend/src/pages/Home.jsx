import React from 'react';
import Sidebar from '../component/sidebar/Sidebar';
import MessageContainer from '../component/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550xp] rounded-lg bg-gray-200 overflow-hidden'>
      <Sidebar/>

    <MessageContainer/>
    </div>
  );
}

export default Home;
