import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { FiArrowUpCircle } from "react-icons/fi";

const GridArrowButtons = ({ ClassText }) => {
  const { playerButtonChoice } = useContext(DataContext);

  const [playerChoice, setPlayersChoice] = playerButtonChoice;
  function rotateAmount(value) {
    switch (value) {
      case 0:
        return 135;
      case 1:
      case 2:
      case 3:
        return 180;
      case 4:
        return 225;
      case 5:
      case 6:
      case 7:
        return 90;
      default:
        return 0;
    }
  }

  const possibleMoves = [
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  return (
    <>
      <div className={`button button${ClassText}`}>
        <button
          className="player-choice-button"
          style={{ transform: `rotate(${rotateAmount(ClassText)}deg)` }}
          onClick={() => {
            setPlayersChoice(possibleMoves[ClassText]);
          }}
        >
          <FiArrowUpCircle size="45px" />
        </button>
      </div>
    </>
  );
};

export default GridArrowButtons;
