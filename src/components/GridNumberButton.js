import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataContext";

const GridNumberButton = ({ ClassText, Text }) => {
  const { cellsDisplayed, playerInfo } = useContext(DataContext);

  const [gridShown, setGridShown] = cellsDisplayed;
  const [gameData, setGameData] = playerInfo;

  function cellClickHandler(cell) {
    if (gameData.guesses > 0) {
      let newArr = [...gridShown];
      newArr[cell] = true;
      setGridShown(newArr);
      setGameData((prev) => ({ ...prev, guesses: gameData.guesses - 1 }));
    }
  }

  return (
    <>
      <div
        className={`button grid-number number${ClassText}`}
        onClick={() => cellClickHandler(ClassText)}
      >
        <h1>{!gridShown[ClassText] ? "" : Text}</h1>
      </div>
    </>
  );
};

export default GridNumberButton;
