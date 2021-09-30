import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataContext";

const GridNumberButton = ({ ClassText, Text }) => {
  const { cellsDisplayed } = useContext(DataContext);

  const [gridShown, setGridShown] = cellsDisplayed;

  function cellClickHandler(cell) {
    let newArr = [...gridShown];
    newArr[cell] = true;
    setGridShown(newArr);
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
