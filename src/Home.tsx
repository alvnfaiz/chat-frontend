import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold'>Chat Room</h1>
      <div className='flex justify-center gap-4'>
        
      <Link to='chat' className="bg-blue-600 text-white rounded m-4 p-4">Start Chat</Link>

      </div>
    </div>
  );
}

export default Home