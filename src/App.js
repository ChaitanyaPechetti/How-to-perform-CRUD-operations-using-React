import React, { useState, useEffect } from 'react';
import './App.css';
import FriendForm from './FriendForm';
import FriendList from './FriendList';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [editFriend, setEditFriend] = useState(null);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem('friends')) || [];
    setFriends(storedFriends);
  }, []);

  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const handleUpdateFriend = (updatedFriend) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === updatedFriend.id ? updatedFriend : friend
    );
    setFriends(updatedFriends);
    setEditFriend(null); // Reset after update
  };

  const handleEditFriend = (friend) => {
    setEditFriend(friend);
  };

  const handleDeleteFriend = (id) => {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  };

  return (
    <div className="App">
      <h1>Friend Notebook</h1>
      <FriendForm
        onAddFriend={handleAddFriend}
        onUpdateFriend={handleUpdateFriend}
        editFriend={editFriend}
      />
      <FriendList
        friends={friends}
        onEditFriend={handleEditFriend}
        onDeleteFriend={handleDeleteFriend}
      />
    </div>
  );
};

export default App;
