import React from 'react';
import FriendsItem from './FriendsItem.js';

export default function FriendsList({ friends }) {
  return (
    <div className='friendGroup'>
      {friends.map((friend, i) => (
        <FriendsItem key={friend + i} friends={friend} />
      ))}
    </div>
  );
}
