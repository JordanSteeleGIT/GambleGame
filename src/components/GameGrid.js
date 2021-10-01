import React, { useState, useEffect, useContext } from "react";
import GridNumberButton from "./GridNumberButton";
import GridArrowButton from "./GridArrowButton";
import { DataContext } from "./DataContext";
import { shuffle } from "./Util";

const GameGrid = () => {
  const { cellsDisplayed, playerInfo } = useContext(DataContext);
  const [gameData, setGameData] = playerInfo;

  const [gridShown, setGridShown] = cellsDisplayed;
  const [grid, setGrid] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  useEffect(() => {
    let newArr = [...gridShown];
    newArr[Math.floor(Math.random() * 9)] = true;
    console.log(newArr);
    setGridShown(newArr);
  }, []);

  return (
    <>
      <h1>{gameData.guesses}</h1>
      <div className="parent">
        {Array(8)
          .fill(1)
          .map((input, i) => (
            <GridArrowButton ClassText={i} />
          ))}
        {grid.map((cellText, i) => (
          <GridNumberButton ClassText={i} Text={cellText} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
