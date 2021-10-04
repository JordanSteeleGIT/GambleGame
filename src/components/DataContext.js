import React, { useState, createContext } from "react";
import { shuffle, scoreValuesStored } from "./Util";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [gridShown, setGridShown] = useState(
    Array.from({ length: 9 }, () => false)
  ); //what cells are being shown
  const [gameData, setGameData] = useState({ guesses: 3, currency: 10000 });
  const [gameScoring, setGameScoring] = useState([]); //scorebaord
  const [playerChoice, setPlayersChoice] = useState([]);
  const [grid, setGrid] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  const [scoreValues, setScoreValues] = useState(scoreValuesStored);
  return (
    <DataContext.Provider
      value={{
        numberGrid: [grid, setGrid],
        cellsDisplayed: [gridShown, setGridShown],
        playerInfo: [gameData, setGameData],
        Scoreboard: [gameScoring, setGameScoring],
        playerButtonChoice: [playerChoice, setPlayersChoice],
        scoreBoardValues: [scoreValues, setScoreValues],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
