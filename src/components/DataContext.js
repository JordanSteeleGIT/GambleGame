import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [gridShown, setGridShown] = useState(
    Array.from({ length: 9 }, () => false)
  );

  const [gameData, setGameData] = useState({ guesses: 3, currency: 10000 });

  const [gameScoring, setGameScoring] = useState([]);

  return (
    <DataContext.Provider
      value={{
        cellsDisplayed: [gridShown, setGridShown],
        playerInfo: [gameData, setGameData],
        Scoreboard: [gameScoring, setGameScoring],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
