import React from 'react';

const FriendList = ({ friends, onEditFriend, onDeleteFriend }) => {
  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <p>Name: {friend.name}</p>
          <p>Date of Birth: {friend.dob}</p>
          <p>Description: {friend.textarea}</p>
          <p>Number: {friend.number}</p>
          <button onClick={() => onEditFriend(friend)}>Edit</button>
          <button onClick={() => onDeleteFriend(friend.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
