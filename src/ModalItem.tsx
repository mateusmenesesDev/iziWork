import {
  Modal,
  Menu,
  Select,
  Title,
  Textarea,
  Avatar,
} from "@mantine/core";
import { IconMenu2, IconSortDescending } from "@tabler/icons";

function ModalItem({opened, setOpened}: {opened: boolean, setOpened: React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <>
      <Modal
        opened={opened}
        overflow="inside"
        onClose={() => setOpened(false)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        size="xl"
      >
        {/* // menu Dropdown */}
        <div className="absolute top-[20px] right-10">
          <Menu
            shadow="md"
            width={200}
            trigger="hover"
            openDelay={100}
            closeDelay={400}
          >
            <Menu.Target>
              <div className="hover:bg-gray-100 p-1 rounded-xl">
                <IconMenu2 size={20} color="gray" />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item onClick={() => alert("Clicked on item")}>
                Item 1
              </Menu.Item>
              <Menu.Item onClick={() => alert("Clicked on item")}>
                Item 1
              </Menu.Item>
              <Menu.Item onClick={() => alert("Clicked on item")}>
                Item 1
              </Menu.Item>
              <Menu.Item onClick={() => alert("Clicked on item")}>
                Item 1
              </Menu.Item>
              <Menu.Item onClick={() => alert("Clicked on item")}>
                Item 1
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="flex gap-10 flex-col">
          <div>
            <Title>Nome da Tarefa</Title>
          </div>
          <div>
            <p className="font-bold">Descrição da Tarefa</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus blanditiis incidunt eaque vel! Atque, doloremque non!
              Totam mollitia reprehenderit soluta recusandae tempore fugiat
              dolorem dignissimos cumque, fuga, eaque pariatur! Reiciendis!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/* filtro de comentario */}
            <div className="flex justify-between items-center">
              <label className="flex gap-2 items-center">
                Mostrar:
                <Select
                  defaultValue={"Comentarios"}
                  data={["Comentarios", "Historico"]}
                />
              </label>
              <p className="hover:bg-gray-100 flex gap-4 px-10 cursor-pointer rounded-lg">
                Recentes Primeiro <IconSortDescending />
              </p>
            </div>
            {/* input de comentario */}
            <div className="flex ">
              <Avatar color="cyan" radius="xl">
                MK
              </Avatar>
              <Textarea
                placeholder="Escreva aqui"
                autosize
                minRows={2}
                maxRows={4}
                className="w-full mx-5"
              />
            </div>
            {/* componente de comentario */}
            <div className="flex gap-4">
              <Avatar color="cyan" radius="xl">
                MK
              </Avatar>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <p className="font-medium">Fulano de tal</p>
                  <p className="text-gray-700">Há um minuto</p>
                </div>
                <p>texto do comentario bla bla bla bla</p>
                <div className="flex gap-2 text-gray-700 cursor-pointer">
                  <p>Editar</p> - <p>Excluir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalItem;
