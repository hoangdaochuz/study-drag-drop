import React from "react";
import { useDrag } from "react-dnd";

const Knignt = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "KNIGHT",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  }));

  return (
    <div ref={drag} style={{ cursor: "pointer", fontSize: 24, fontWeight: 700 }}>
      ♘
    </div>
  );
};

export default Knignt;
