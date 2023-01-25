import AvatarGroup from "../../../components/avatarGroup/AvatarGroup";
import { Draggable } from "react-beautiful-dnd";
import { Iitem, Icollumns } from "../../../types/itemsTypes";
import { Menu } from "@mantine/core";

type props = {
  item: Iitem;
  index: number;
  setColumns: React.Dispatch<React.SetStateAction<Icollumns>>;
  columnId: string;
};

const Item = ({ item, index, setColumns, columnId }: props) => {
  const handleDeleteItem = (id: string) => {
    //quando estiver pegando dados no servidor e não no localstorage, tem que fazer um fetch aqui
    setColumns(({ ...columns } : Icollumns) => {
      columns[columnId].items = columns[columnId].items.filter(
        (itema: Iitem) => itema.id !== id
      );
      return columns;
    });
  };

  return (
    <Draggable key={item.id} draggableId={item.id} index={index || 0}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`group select-none shadow-sm justify-between flex flex-col w-72 h-44 rounded-xl font-main p-5 bg-[#FFF]`}
            style={{ ...provided.draggableProps.style }}
          >
            <div className="w-full text-sm flex justify-between items-center">
              <p className="font-medium text-[#B9B9B9]">{item.cod.toUpperCase()}</p>
              <Menu shadow="md" width={200} position="bottom-end">
                <Menu.Target>
                  <div className="hover:bg-[#D5D5D5] rounded-full w-8 h-8 invisible justify-center bg-container flex items-center cursor-pointer group-hover:visible">
                    ...
                  </div>
                </Menu.Target>

                <Menu.Dropdown className="invisible group-hover:visible">
                  <Menu.Label>Options</Menu.Label>
                  <Menu.Item color="red" onClick={() => handleDeleteItem(item.id)}>Delete</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <div className="font-semibold w-4/5">{item.content}</div>
            <div className="w-full">
              {item.members.length === 0 ? (
                <p className="text-blue-500 font-medium text-sm">
                  Assign Members
                </p>
              ) : (
                <AvatarGroup members={item.members} />
              )}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Item;
