import React, { useState } from "react";
import Square from "./Square";
import { useDrop } from "react-dnd";
import { canDrop } from "./helper";

const BoardSquare = ({ x, y, handleSetPosition, knightPosition, children }) => {
  const [{ isOver, isDroppable }, drop] = useDrop(
    () => ({
      accept: "KNIGHT",
      drop: () => {
        handleSetPosition();
      },
      canDrop: () => canDrop(x, y, knightPosition),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        isDroppable: !!monitor.canDrop(),
      }),
    }),
    [knightPosition]
  );

  const isBlack = (x + y) % 2 === 1;
  return (
    <div
      style={{
        backgroundColor: isBlack ? "black" : "white",
        color: isBlack ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      ref={drop}
      onClick={handleSetPosition}
    >
      <Square handleSetPosition={handleSetPosition} black={isBlack}>
        {children}
      </Square>
      {!isOver && isDroppable && (
        <div
          style={{
            backgroundColor: "yellow",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
      {isOver && isDroppable && (
        <div
          style={{
            backgroundColor: "green",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
      {isOver && !isDroppable && (
        <div
          style={{
            backgroundColor: "red",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
    </div>
  );
};

export default BoardSquare;
