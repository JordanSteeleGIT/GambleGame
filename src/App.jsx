import React from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameInfo from "./components/GameInfo";
import { DataProvider } from "./components/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <div className="game-container">
          <div className="left-side-container">
            <GameInfo />
            <GameGrid />
          </div>
          <div className="right-side-container"></div>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
