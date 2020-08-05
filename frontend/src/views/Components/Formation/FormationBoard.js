import React from "react";
import { FormationSquare } from "./FormationSquare";

const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};

const squareStyle = { width: "20%", height: "25%" };

export const FormationBoard = ({ renderPiece }) => {
  function renderSquare(i) {
    return (
      <div key={i} style={squareStyle}>
        <FormationSquare>{renderPiece(i)}</FormationSquare>
      </div>
    );
  }

  const squares = [];
  for (let i = 1; i < 21; i += 1) {
    squares.push(renderSquare(i));
  }
  return <div style={boardStyle}>{squares}</div>;
};