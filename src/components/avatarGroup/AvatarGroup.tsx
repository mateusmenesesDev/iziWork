import getPersonFromId from "./utils/getPersonFromId";
import { Avatar, Tooltip } from "@mantine/core";

function AvatarGroup({members}: {members: Array<string>}) {
  //isso é pra fins de exemplo, as pessoas vão vir das props
  const persons = members.map(() => getPersonFromId());
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {persons.map((person, i) => {
          if (i < 2) {
            return (
              <Tooltip key={person.id} label={person.name}>
                <Avatar src={person.avatar} radius="xl" />
              </Tooltip>
            );
          }
        })}
        <Tooltip
          withArrow
          label={
            <>
              {persons.slice(3).map((person) => (
                <div key={person.id}>{person.name}</div>
              ))}
            </>
          }
        >
          <Avatar radius="xl"> +{persons.slice(3).length} </Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}

export default AvatarGroup;
