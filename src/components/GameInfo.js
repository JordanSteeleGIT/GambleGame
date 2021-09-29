import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const GameInfo = () => {
  const { playerScore } = useContext(DataContext);
  const [noOfGuesses, setNoOfGuesses] = playerScore;
  return (
    <>
      <div className="game-info-pannel">
        <div>Guesses Left:{noOfGuesses}</div>
        <div>Total Currency:{noOfGuesses}</div>
      </div>
    </>
  );
};

export default GameInfo;
