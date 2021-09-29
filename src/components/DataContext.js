import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [gridShown, setGridShown] = useState(
    Array.from({ length: 9 }, () => false)
  );

  const [noOfGuesses, setNoOfGuesses] = useState(3);
  return (
    <DataContext.Provider
      value={{
        cellsDisplayed: [gridShown, setGridShown],
        playerScore: [noOfGuesses, setNoOfGuesses],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
