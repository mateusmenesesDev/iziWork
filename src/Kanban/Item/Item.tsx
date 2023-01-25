import AvatarGroup from "../../AvatarGroup/AvatarGroup";
import { Draggable } from "react-beautiful-dnd";

interface Iitem {
  id: string;
  content: string;
  index: number;
  cod: string;
  members: Array<string>;
}

const Item = ({ id, content, index, cod, members}: Iitem) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
    {(provided) => {
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`select-none shadow-sm justify-between flex flex-col w-72 h-44 rounded-xl font-main p-5 bg-[#FFF]`}
          style={{ ...provided.draggableProps.style }}
        >
          <div className='w-full text-sm'>
            <p className='font-medium text-[#B9B9B9]'>{cod.toUpperCase()}</p>
        </div>
        <div className='font-semibold w-4/5'>
            {content}
        </div>
        <div className='w-full'>
          {
            members.length === 0 ? <p className='text-blue font-medium text-sm'>Assign Members</p> : <AvatarGroup members={members}/>
          }
        </div>
        </div>
      )
    }}
  </Draggable>
  );
}

export default Item;