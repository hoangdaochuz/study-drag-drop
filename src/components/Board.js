import React from "react";
import Square from "./Square";
import Knignt from "./Knignt";
import BoardSquare from "./BoardSquare";
import { useDrop } from "react-dnd";

const Board = ({ knightPosition, setKnightPosition }) => {
  const renderSquare = (x, y) => {
    const handleSetPosition = () => {
      setKnightPosition([x, y]);
    };

    const [knightX, knightY] = knightPosition;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knignt /> : null;
    return (
      <BoardSquare x={x} y={y} knightPosition={knightPosition} handleSetPosition={handleSetPosition}>
        {piece}
      </BoardSquare>
    );
  };
  return (
    <div
      style={{
        width: "900px",
        height: "900px",
        display: "grid",
        gridTemplateColumns: "repeat(8,1fr)",
        margin: "auto",
        border: "1px solid #ccc",
      }}
    >
      {Array(64)
        .fill(0)
        .map((item, index) => {
          const x = index % 8;
          const y = Math.floor(index / 8);
          return renderSquare(x, y);
        })}
    </div>
  );
};

export default Board;
