import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import onDragEnd from "./Utils/onDragEnd";
import columnsFromBackend from "./Utils/data";
import Collumn from "./Collumn/Collumn";

const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className = 'h-full bg-container w-full overflow-auto'>
      <div className="flex justify-center h-full">
        <DragDropContext onDragEnd={(result) => {
          onDragEnd(result, columns, setColumns)
        }}>
          {Object.entries(columns)
            .map(([columnId, column]) => {
              return (
                <Collumn key={columnId} columnId={columnId} column={column} />
              )
            })
          }
        </DragDropContext>
      </div>
    </div>);
}

export default Kanban;