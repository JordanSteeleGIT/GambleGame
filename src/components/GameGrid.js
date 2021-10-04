import React, { useState, useEffect, useContext } from "react";
import GridNumberButton from "./GridNumberButton";
import GridArrowButton from "./GridArrowButton";
import { DataContext } from "./DataContext";

const GameGrid = () => {
  const { cellsDisplayed, numberGrid } = useContext(DataContext);

  const [gridShown, setGridShown] = cellsDisplayed;
  const [grid, setGrid] = numberGrid;

  useEffect(() => {
    let newArr = [...gridShown];
    newArr[Math.floor(Math.random() * 9)] = true;
    setGridShown(newArr);
  }, []);

  return (
    <>
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
