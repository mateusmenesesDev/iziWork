import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import onDragEnd from "./utils/onDragEnd";
import columnsFromBackend from "../../utils/data";
import Collumn from "./collumn/Collumn";
import { v4 as uuidv4 } from "uuid";

const Kanban = () => { 
  const [columns, setColumns] = useState(columnsFromBackend);

  const addColumn = () => {
    const newColumn = {
      name: "New Column",
      items: [],
    };
    setColumns({
      ...columns,
      [uuidv4()]: newColumn,
    });
  };

  return (
    <div className="overflow-auto">
      <div className="w-full flex justify-end p-4">
        <button
          onClick={addColumn}
          className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Column
        </button>
      </div>
      <div className=" bg-container w-full overflow-x-auto flex">
        <div className="flex justify-center h-full">
          <DragDropContext
            onDragEnd={(result) => {
              onDragEnd(result, columns, setColumns);
            }}
          >
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <Collumn
                  key={columnId}
                  columnId={columnId}
                  column={column}
                  setColumns={setColumns}
                />
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
