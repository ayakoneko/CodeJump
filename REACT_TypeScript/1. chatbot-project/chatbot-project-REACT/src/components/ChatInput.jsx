import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import LoadingSpinnerImage from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setLoading] = useState(false);
  
  function saveInputText(event) {
    setInputText(event.target.value); 
  }

  async function sendMessage() {
    if (isLoading || inputText === ''){
      return
    }

    setLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        time: dayjs().valueOf(),
        id: crypto.randomUUID()
      }
    ];
    
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinnerImage} className="loading-spinner" />,
        sender: 'robot',
        time: dayjs().valueOf(),
        id: crypto.randomUUID()
      }
    ]);
    setInputText('');

    const response = await Chatbot.getResponseAsync(inputText);
    
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setLoading(false);
  }

  function handleKeyDown(event){
    if (event.key === 'Enter'){
      sendMessage();
    }else if (event.key === 'Escape'){
      setInputText('');
    }
  }

  function ClearMessages() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className = "chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button onClick={ClearMessages} className="clear-button">
        Clear
      </button>
    </div>
  );
}