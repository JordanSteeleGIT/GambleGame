import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataContext";

const GridNumberButton = ({ ClassText, Text }) => {
  const { cellsDisplayed, playerInfo, playerButtonChoice } = useContext(
    DataContext
  );

  const [gridShown, setGridShown] = cellsDisplayed;
  const [gameData, setGameData] = playerInfo;
  const [playerChoice, setPlayersChoice] = playerButtonChoice;

  function cellClickHandler(cell) {
    let newArr = [...gridShown];
    if (gameData.guesses > 0 && !newArr[cell]) {
      newArr[cell] = true;
      setGridShown(newArr);
      setGameData((prev) => ({ ...prev, guesses: gameData.guesses - 1 }));
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor:
            ClassText === playerChoice[0] ||
            ClassText === playerChoice[1] ||
            ClassText === playerChoice[2]
              ? "#2C8921"
              : "#541764",
        }}
        className={`button grid-number number${ClassText}`}
        onClick={() => cellClickHandler(ClassText)}
      >
        <h1>{!gridShown[ClassText] ? "" : Text}</h1>
      </div>
    </>
  );
};

export default GridNumberButton;
