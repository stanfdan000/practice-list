
import './App.css';
import { candies } from './candies.js';
import CandiesList from './CandiesList';
import { games } from './games.js';
import GamesList from './GamesList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
      <hr />
      <GamesList games={games} />
    </div>
  );
}

export default App;
