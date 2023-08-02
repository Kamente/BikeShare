// src/App.js
import React, { useState } from 'react';
import UserList from './UserList';
import UserProfile from './UserProfile';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      {!selectedUser ? (
        <UserList handleUserClick={handleUserClick} />
      ) : (
        <UserProfile user={selectedUser} />
      )}
    </div>
  );
}

export default App;







