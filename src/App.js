import { useState } from "react";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [knightPosition, setKnightPosition] = useState([0, 0]);
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Board knightPosition={knightPosition} setKnightPosition={setKnightPosition} />
      </DndProvider>
    </div>
  );
}

export default App;
