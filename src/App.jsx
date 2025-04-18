import Begin from "./components/Begin";
import Hangman from "./components/Hangman";
import { useGame } from "./context/GameProvider";

function App() {
  const { state } = useGame();
  console.log(state);
  return (
    <div className="app">
      <h1>Hangman</h1>
      {state.status === "ready" && <Begin />}
      {state.status === "active" && <Hangman />}
    </div>
  );
}

export default App;
