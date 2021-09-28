import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

const GridArrowButtons = ({ ClassText }) => {
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
  return (
    <>
      <div className={`button button${ClassText}`}>
        <button
          className="player-choice-button"
          style={{ transform: `rotate(${rotateAmount(ClassText)}deg)` }}
          onClick={() => console.log(ClassText)}
        >
          <FiArrowUpCircle size="45px" />
        </button>
      </div>
    </>
  );
};

export default GridArrowButtons;
