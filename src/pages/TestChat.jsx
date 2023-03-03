import './TestChat.css';

import { aiRequest } from '../utils/ai_request';
import { useState } from 'react';

const constructChat = (text, userArr, assistantArr) => {
  const combinedArr = [];

  for (let i = 0; i < userArr.length; i++) {
    combinedArr.push({ role: 'user', content: userArr[i] });
    combinedArr.push({ role: 'assistant', content: assistantArr[i] });
  }

  combinedArr.push({ role: 'user', content: text });

  return combinedArr;
};

const TestChat = () => {
  const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [roles, setRoles] = useState([
    {
      name: 'assistant',
      content: 'You are a helpful assistant.',
      messages: [],
    },
  ]);
  const [rolesAdded, setRolesAdded] = useState(false);

  const handleSend = async (event) => {
    event.preventDefault();

    if (messageText.trim().length === 0) {
      return;
    }
    setIsSending(true);

    setUserMessages((prev) => [...prev, messageText.trim()]);
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: messageText.trim() },
    ]);

    if (!rolesAdded) {
      setRolesAdded(true);
    }

    try {
      for (const role of roles) {
        const rawChat = constructChat(messageText, userMessages, role.messages);
        const chat = [{ role: 'system', content: role.content }, ...rawChat];

        const rawResponse = await aiRequest(chat);
        const response = rawResponse.trim();

        setRoles((prevRoles) =>
          prevRoles.map((r) => {
            if (r.name === role.name) {
              return { ...r, messages: [...r.messages, response] };
            } else {
              return r;
            }
          })
        );
        setMessages((prev) => [
          ...prev,
          { role: role.name, content: response },
        ]);
      }
    } catch (error) {
      console.log(error);
    }

    setIsSending(false);
    setMessageText('');
  };

  const changeRolesName = (message, index) => {
    const newRoles = [...roles];
    newRoles[index].name = message;
    setRoles(newRoles);
  };

  const changeRolesContent = (message, index) => {
    const newRoles = [...roles];
    newRoles[index].content = message;
    setRoles(newRoles);
  };

  const addRoles = () => {
    setRoles((prev) => [...prev, { name: '', content: '', messages: [] }]);
  };

  return (
    <div className='chat-container'>
      {!isSending && !rolesAdded && (
        <>
          {roles.map((role, index) => (
            <div key={index} className='system-inputs'>
              <input
                id='system-name-input'
                type='text'
                value={role.name}
                onChange={(event) => changeRolesName(event.target.value, index)}
                disabled={isSending || rolesAdded}
                className='text-input'
                placeholder='system role'
              />
              <input
                id='system-message-input'
                type='text'
                value={role.content}
                onChange={(event) =>
                  changeRolesContent(event.target.value, index)
                }
                disabled={isSending || rolesAdded}
                className='text-input'
                placeholder='system role'
              />
            </div>
          ))}
          <button
            disabled={isSending || rolesAdded}
            className='send-button'
            onClick={addRoles}
          >
            Add
          </button>
        </>
      )}
      <div className='messages-container'>
        {messages.map(({ role, content }, index) => (
          <div className='message-line' key={index}>
            {role !== 'user' && <div className='role-name'>{role}</div>}
            <div className={`message message-${role}`}>{content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        {/* <label htmlFor='text-input'>Enter a message:</label> */}
        <input
          id='text-input'
          type='text'
          maxLength={3800}
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          disabled={isSending}
          className='text-input'
          placeholder='Type your message here...'
        />
        <button type='submit' disabled={isSending} className='send-button'>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default TestChat;
