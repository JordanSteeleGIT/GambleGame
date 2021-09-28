import React, { useState } from "react";

const GridNumberButton = ({ ClassText, Text }) => {
  const [gridShown, setGridShown] = useState(
    Array.from({ length: 9 }, () => false)
  );

  function cellClickHandler(cell) {
    let newArr = [...gridShown];
    newArr[cell] = true;
    setGridShown(newArr);
  }
  return (
    <div
      className={`button grid-number number${ClassText}`}
      onClick={() => cellClickHandler(Text)}
    >
      <h1>{!gridShown[Text] ? "" : Text}</h1>
    </div>
  );
};

export default GridNumberButton;
