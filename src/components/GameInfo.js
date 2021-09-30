import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const GameInfo = () => {
  const { playerInfo } = useContext(DataContext);

  const [gameData, setGameData] = playerInfo;
  return (
    <>
      <div className="game-info-pannel">
        <h3>Guesses Left:{gameData.guesses}</h3>
        <h3>Total Currency:{gameData.currency}</h3>
      </div>
    </>
  );
};

export default GameInfo;
