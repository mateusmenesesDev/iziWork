import {Droppable} from "react-beautiful-dnd";
import Item from "../Item/Item";

interface Icolumn {
  name: string;
  items: {id: string; content: string}[];
}

interface Iprops {
  columnId: string;
  column: Icolumn;
}

const Collumn = ({columnId, column}: Iprops) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold">{column.name}</h2>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`${snapshot.isDraggingOver ? 'bg-gray-100' : 'bg-white'} p-4 border-x-[1px] border-solid w-64 h-full`}
            >
              {column.items.map(({id, content}, index) => {
                return (
                  <Item key={id} id={id} content={content} index={index} />
                )
              })}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  )
};

export default Collumn;