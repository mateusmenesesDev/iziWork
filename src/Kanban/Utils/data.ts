import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "First task", cod: "t-24", members: 25,},
  { id: uuidv4(), content: "second task", cod: "t-24", members: 25,},
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "In Progress",
    items: [{  id: uuidv4(), content: "First task", cod: "t-24", members: 25, },
    { id: uuidv4(), content: "Second task", cod: "t-24", members: 25, },
    { id: uuidv4(), content: "Third task" , cod: "t-24", members: 25,},],
  },
  [uuidv4()]: {
    name: "Done",
    items: [],
  },
  [uuidv4()]: {
    name: "Titulo",
    items: [],
  },
};


export default columnsFromBackend;