import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/gameReducer";

const GameContext = createContext();

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

const useGame = function () {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("Game context is being run outside the provider bounds.!");

  return context;
};

export { GameProvider, useGame };
