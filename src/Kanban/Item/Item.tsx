import { Draggable } from "react-beautiful-dnd";

interface Iitem {
  id: string;
  content: string;
  index: number;
}

const Item = ({ id, content, index}: Iitem) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
    {(provided, snapshot) => {
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`select-none h-40 p-2 rounded-md shadow-md my-2 ${snapshot.isDragging ? 'bg-gray-100' : 'bg-white'}`}
          style={{ ...provided.draggableProps.style }}
        >
          {content}
        </div>
      )
    }}
  </Draggable>
  );
}

export default Item;