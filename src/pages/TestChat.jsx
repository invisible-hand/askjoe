import { aiRequest } from '../utils/ai_request';
import { useState } from 'react';

const TestChat = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (messageText.trim() === '') {
      return;
    }
    const updatedMessages = [
      ...messages,
      { role: 'user', content: messageText },
    ];

    setIsSending(true);

    try {
      const response = await aiRequest(updatedMessages);
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: response },
      ]);
    } catch (error) {
      console.error(error);
    }

    setIsSending(false);
    setMessageText('');
  };

  return (
    <div>
      <label htmlFor='text-input'>Enter a message:</label>
      <input
        id='text-input'
        type='text'
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        disabled={isSending}
      />
      <button onClick={handleSend} disabled={isSending}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {messages.map(({ role, content }, index) => (
        <div key={index}>
          {role === 'user' ? 'You: ' : 'Assistant: '}
          {content}
        </div>
      ))}
    </div>
  );
};

export default TestChat;
