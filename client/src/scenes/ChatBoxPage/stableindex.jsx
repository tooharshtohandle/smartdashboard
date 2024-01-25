// ChatboxPage.js
import React, { useState } from 'react';

const ChatboxPage = () => {
  const [userQuery, setUserQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserQuery = async () => {
    // Send the user's query to the backend
    try {
      const response = await fetch('http://localhost:7000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userQuery }), // Corrected the property name
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      // Update the chat history with the user's message and response
      const updatedChatHistory = [
        ...chatHistory,
        { role: 'user', content: userQuery },
        { role: 'bot', content: responseData.response }, // Assuming you want to display the 'response' property
      ];

      setChatHistory(updatedChatHistory);
      setUserQuery('');
    } catch (error) {
      console.error('Error:', error);
      // Handle the error appropriately (e.g., show a user-friendly message)
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUserQuery();
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Half: Reserved space for the graph (customize styles as needed) */}
      <div style={{ flex: 2, borderBottom: '1px solid #ccc', padding: '20px', overflow: 'hidden', borderRadius: '10px', backgroundColor: '#141b2d' }}>
        {/* Render your graph component here */}
        <div style={{ width: '100%', height: '100%', backgroundColor: '#141b2d' }}>
          {/* Your graph component goes here */}
        </div>
      </div>

      {/* Bottom Half: User Query Input and Chat History */}
      <div style={{ flex: 1, padding: '20px', overflow: 'auto', borderRadius: '10px', backgroundColor: '#141b2d' }}>
        {/* Chat History */}
        <div style={{ marginBottom: '20px' }}>
          {chatHistory.map((message, index) => (
            <div key={index} style={{ marginBottom: '10px', textAlign: message.role === 'user' ? 'right' : 'left', color: 'white' }}>
              <span style={{ fontWeight: message.role === 'user' ? 'bold' : 'normal' }}>
                {message.role === 'user' ? 'You: ' : 'Chatbot: '}
              </span>
              {message.content}
            </div>
          ))}
        </div>

        {/* User Query Input */}
        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '10px' }}>
          <input
            type="text"
            placeholder="Type your query..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              marginRight: '10px',
              height: '40px',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#141b2d',
              border: 'none',
              outline: 'none',
              padding: '0 10px',
            }}
          />
          <button onClick={handleUserQuery} style={{
            height: '40px',
            borderRadius: '5px',
            backgroundColor: '#fff',
            color: '#141b2d',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
          }}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatboxPage;
