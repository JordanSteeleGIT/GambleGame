import React from "react";

const GridArrowButtons = ({ ClassText }) => {
  return (
    <>
      <div className={`button button${ClassText}`}>
        <button>click me</button>
      </div>
    </>
  );
};

export default GridArrowButtons;
