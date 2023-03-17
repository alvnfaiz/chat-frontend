import React, {useState, useEffect} from 'react';
import Chat from './component/Chat';

interface ChatProps {
  location: {
    state?: {
      position?: string;
    };
  };
}

interface Message {
  id: number;
  text: string;
  position: string;
}

const ChatRoom: React.FC<ChatProps> = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [position, setPosition] = useState();
  useEffect(() => {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = new Date().valueOf();
    setMessages([...messages, { id, text, position }]);
    setText('');
  };

  const handleClick = (e:string) => {
    console.log('this is:', e);
    setPosition(e);
  };

  const handleDeleteMessage = (id: number) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
  };

  return (

    <div className='h-screen'> 
      {!position? (
      <div className='flex justify-center gap-6 mx-auto my-auto items-center h-full'>
        <button className='py-6 px-4 bg-blue-600 text-white' onClick={() => handleClick('left')}>Left</button>
        <button className='py-6 px-4 bg-blue-600 text-white' onClick={() => handleClick('right')}>Right</button>
      </div>) : (
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
              <div className="relative flex items-center space-x-4">
                <div className="relative">
                    <span className="absolute text-green-500 right-0 bottom-0">
                      <svg width="20" height="20">
                          <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                      </svg>
                    </span>
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
                </div>
                <div className="flex flex-col leading-tight">
                    <div className="text-2xl mt-1 flex items-center">
                      <span className="text-gray-700 mr-3">Alvin Faiz</span>
                    </div>
                    <span className="text-lg text-gray-600">Junior Developer</span>
                </div>
              </div>
          </div>
          <div id="messages" className="flex flex-col h-full space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
              {messages.map(message => (
              <Chat
                key={message.id}
                message={message}
                onDeleteMessage={handleDeleteMessage}
                position={position}
              />
        ))}
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
              <form className="relative flex" onSubmit={handleMessageSubmit}>
                  <input type="text"
                    placeholder="Type your message here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                    className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"/>
                  <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                      <button type="submit" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                        <span className="font-bold">Send</span>
                      </button>
                  </div>
              </form>
          </div>
        </div>
      )}
    </div>
  
  );
}

export default ChatRoom;