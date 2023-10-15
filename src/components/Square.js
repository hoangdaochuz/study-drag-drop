import React from "react";

const Square = ({ black, children, handleSetPosition }) => {
  return (
    <div style={{}} onClick={handleSetPosition}>
      {children}
    </div>
  );
};

export default Square;
