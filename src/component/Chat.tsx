import React from 'react';

interface Message {
  id: number;
  text: string;
  position: string;
}

interface ChatProps {
  message: Message;
  onDeleteMessage: (id: number) => void;
}

const Chat: React.FC<ChatProps> = ({ message}) => {
  const { id, text, position } = message;
  const imageClass = position === 'left' ? 'order-1': 'order-2';
  const bubbleClass = position === 'left' ? 'flex items-end' : 'flex items-end justify-end';
  const itemsClass = position=== 'left'?'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start':'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end';
  const textClass = position === 'left'?'px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600':'px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white';
  const image = position === 'left'?'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144':'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144';
  return (
    <div className="chat-message">
      <div className={`${bubbleClass}`}>
          <div className={` ${itemsClass}`}>
            <span className={`text-xl ${textClass}`}>{text}</span>
          </div>
          <img src={image} alt="My profile" className={`w-6 h-6 rounded-full ${imageClass}`}/>
      </div>
    </div>
  );
}

export default Chat