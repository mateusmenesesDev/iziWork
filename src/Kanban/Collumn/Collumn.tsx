import { Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";
import { Menu } from "@mantine/core";

interface Icolumn {
  name: string;
  items: { id: string; content: string; cod: string; members: Array<string> }[];
}

interface Iprops {
  columnId: string;
  column: Icolumn;
}

const Collumn = ({ columnId, column }: Iprops) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center p-5 group">
        <div className="flex gap-5 items-center">
          <h2 className="text-lg font-bold">{column.name}</h2>
          <div className="bg-[#D5D5D5] rounded-full w-8 h-8 flex justify-center items-center">
            {column.items.length}
          </div>
        </div>

        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <div className="hover:bg-[#D5D5D5] rounded-full w-8 h-8 hidden justify-center bg-container items-center cursor-pointer group-hover:flex">
              ...
            </div>
          </Menu.Target>

          <Menu.Dropdown className="hidden group-hover:block">
            <Menu.Label>{column.name}</Menu.Label>
            <Menu.Item color="red">Delete</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`${
                snapshot.isDraggingOver ? "bg-neutral" : "bg-container"
              } p-4 w-80 h-full gap-2 flex flex-col`}
            >
              {column.items.map(({ id, content, cod, members }, index) => {
                return (
                  <Item
                    key={id}
                    id={id}
                    content={content}
                    index={index}
                    cod={cod}
                    members={members}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Collumn;
