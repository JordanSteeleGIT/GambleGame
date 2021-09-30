import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { shuffle } from "./Util";

const Scoreboard = () => {
  const [scoreValues, setScoreValues] = useState(
    shuffle([
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
    ])
  );
  const { Scoreboard } = useContext(DataContext);
  const [gameScoring, setGameScoring] = Scoreboard;
  useEffect(() => {
    scoreValues.map((score, index) => {
      setGameScoring((prevArray) => [
        ...prevArray,
        { value: score, worth: 24000 - index * 2100 },
      ]);
    });
  }, []);

  return (
    <div>
      {gameScoring.map((score, index) => {
        return (
          <p>
            {score.value}: {score.worth}
          </p>
        );
      })}
    </div>
  );
};

export default Scoreboard;
