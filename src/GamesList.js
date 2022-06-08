import React from 'react';
import GamesItem from './GamesItem';

export default function GamesList({ games }) {
  return (
    <div className='game-list'>
      {
        games.map((games, i) => <GamesItem {...games} key={games.name + i} />)
      }
    </div>
  );
}
