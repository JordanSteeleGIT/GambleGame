import React, { useState } from "react";
import GridNumberButton from "./GridNumberButton";
import GridArrowButton from "./GridArrowButton";

const GameGrid = () => {
  const [grid, setGrid] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

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
