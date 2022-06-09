import React from 'react';

export default function FriendsItem({ friends }) {
  return (
    <div className='friends-item'>
      <div>
        <h1>This Is {friends.name}</h1>
        <p>His Age Is {friends.age} Years Old</p>
        <p>He Is A {friends.type}</p>
      </div>
      <div className='friendGroup'>
        <div>
          <h1>{friends.friend.name} Is His Friend</h1>
          <p>His Age Is {friends.friend.age} Years Old</p>
          <p>He Is Also A {friends.friend.type}</p>
        </div>
      </div>
    </div>
  );
}
