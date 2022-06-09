import React from 'react';

export default function GameItem({
  name,
  players,
  type,
  boxColor,
}) {
  return (
    <div className='game' style={{ boxShadow: boxColor }}>
      <p>This Game Is {name}</p>
      <p>You Can Play Up To {players}</p>
      <p>And This Game Is a {type} Type Game </p>
    </div>
  );
}
