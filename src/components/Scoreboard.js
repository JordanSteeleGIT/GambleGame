import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { shuffle, scoreWorth } from "./Util";

const Scoreboard = () => {
  const { Scoreboard, playerInfo, scoreBoardValues } = useContext(DataContext);
  const [gameScoring, setGameScoring] = Scoreboard;
  const [gameData, setGameData] = playerInfo;
  const [scoreValues, setScoreValues] = scoreBoardValues;

  useEffect(() => {
    setGameScoring([]);
    shuffle(scoreValues).map((score, index) => {
      setGameScoring((prevArray) => [
        ...prevArray,
        { value: score, worth: scoreWorth[index] },
      ]);
    });
  }, [scoreValues]);

  return (
    <>
      <div className="right-side-upper">
        <h1>Payout</h1>
        <div className="payout-container">
          {gameScoring.map((score, index) => {
            return (
              <div className="score">
                <p className="value">{score.value}:</p>
                <p
                  className="worth"
                  style={{ color: score.worth < 0 ? "red" : "#41AF1E" }}
                >
                  {` £${new Intl.NumberFormat("en-EU", {
                    maximumSignificantDigits: 3,
                  }).format(score.worth)}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="player-currency">
        <h3>Your Currency:</h3>
        <h1>
          {` £${new Intl.NumberFormat("en-EU", {
            maximumSignificantDigits: 3,
          }).format(gameData.currency)}`}
        </h1>
      </div>
    </>
  );
};

export default Scoreboard;
