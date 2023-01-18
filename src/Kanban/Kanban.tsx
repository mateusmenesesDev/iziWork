import React, { useState} from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "First task" },
  { id: uuidv4(), content: "Second task" },
  { id: uuidv4(), content: "Third task" },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "In Progress",
    items: [],
  },
  [uuidv4()]: {
    name: "Done",
    items: [],
  },
};

interface Iitem {
  id: string;
  content: string;
}

interface Icolumns {
  [key: string]: {
    name: string;
    items: Iitem[];
  }
}



const onDragEnd = (result : DropResult, columns : Icolumns, setColumns : React.Dispatch<React.SetStateAction<Icolumns>>) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId){
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  }else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
      });
  }
}

const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div>
      <div className="flex justify-center h-full">
        <DragDropContext onDragEnd={(result) => {
          onDragEnd(result, columns, setColumns)
        }}>
          {Object.entries(columns)
            .map(([columnId, column]) => {
              return (
                  <div className="flex flex-col">
                  <h2 className="text-lg font-bold">{column.name}</h2>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`${snapshot.isDraggingOver ? 'bg-gray-100' : 'bg-white'} p-4 rounded-md shadow-md w-64 h-96`}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided , snapshot) => {
                                return (
                                  <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className = {`select-none p-2 rounded-md shadow-md my-2 ${snapshot.isDragging ? 'bg-gray-100' : 'bg-white'}`}
                                  style = {{...provided.draggableProps.style}}
                                  >
                                    {item.content}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
                      </div>
              )
            })
            }
        </DragDropContext>
      </div>
    </div>);
}

export default Kanban;