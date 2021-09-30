import React from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";

import Scoreboard from "./components/Scoreboard";
import { DataProvider } from "./components/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <div className="game-container">
          <div className="left-side-container">
            <GameGrid />
          </div>
          <div className="right-side-container">
            <Scoreboard />
          </div>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
