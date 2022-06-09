import './App.css';
import { candies } from './candies.js';
import CandiesList from './CandiesList';
import { friends } from './Friends.js';
import { games } from './games.js';
import GamesList from './GamesList';
import FriendsList from './friendsList';
import BooksList from './BooksList';
import { books } from './books.js';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
      <hr />
      <GamesList games={games} />
      <hr />
      <FriendsList friends={friends} />
      <hr />
      <BooksList books={books} />
    </div>
  );
}

export default App;
