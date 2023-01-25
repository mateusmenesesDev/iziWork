import { Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";
import { Menu } from "@mantine/core";
import { Icolumn, Icollumns } from "../types";

type Iprops = {
  columnId: string;
  column: Icolumn;
  setColumns: React.Dispatch<React.SetStateAction<Icollumns>>;
}

const Collumn = ({ columnId, column, setColumns }: Iprops) => {
  const handleDeleteCollum = (columnId: string) =>
  //quando estiver pegando dados no servidor e não no localstorage, tem que fazer um fetch aqui
  {
    setColumns(({ ...columns }) => {
      delete columns[columnId];
      return columns;
    });
  };

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
            <Menu.Item color="red" onClick={() => handleDeleteCollum(columnId)}>Delete</Menu.Item>
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
              {column.items.map((item, index) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    index={index}
                    setColumns={setColumns}
                    columnId={columnId}
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
