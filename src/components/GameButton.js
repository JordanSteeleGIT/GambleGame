import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import { shuffle, arrayShow } from "./Util";

const GameButton = () => {
  const {
    playerInfo,
    playerButtonChoice,
    numberGrid,
    Scoreboard,
    cellsDisplayed,
  } = useContext(DataContext);

  const [gameData, setGameData] = playerInfo;
  const [playerChoice, setPlayersChoice] = playerButtonChoice;
  const [grid, setGrid] = numberGrid;
  const [gameScoring, setGameScoring] = Scoreboard;
  const [gridShown, setGridShown] = cellsDisplayed;
  const [endOfRound, setEndOfRound] = useState(false);

  function playersTurn() {
    toggleGrid();
    setEndOfRound(true);
    let roundValue = gameScoring.find((o) => o.value === sumOfChoice());
    setGameData((prev) => ({
      ...prev,
      currency: gameData.currency + roundValue.worth,
    }));
  }
  function toggleGrid() {
    gridShown.forEach((element, index) => {
      gridShown[index] = true;
    });
  }
  function sumOfChoice() {
    let sum = 0;
    playerChoice.map((a) => {
      sum += grid[a];
    });
    return sum;
  }

  function resetGrid() {
    gridShown.forEach((element, index) => {
      gridShown[index] = false;
    });
    let newArr = [...gridShown];
    newArr[Math.floor(Math.random() * 9)] = true;
    setGridShown(newArr);
  }
  function nextRoundHandler() {
    setEndOfRound(false);
    setGrid(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    setPlayersChoice([]);
    resetGrid();
    setGameData((prev) => ({
      ...prev,
      guesses: (gameData.guesses = 3),
    }));
  }
  return (
    <div className="left-side-lower">
      <h3>{` Remaining Guesses: ${gameData.guesses}`}</h3>
      {playerChoice.length > 0 && !endOfRound && (
        <button onClick={playersTurn}>Confirm</button>
      )}
      {endOfRound && <button onClick={nextRoundHandler}>Next Round</button>}
    </div>
  );
};

export default GameButton;
