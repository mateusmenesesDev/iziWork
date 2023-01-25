import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "First task", cod: "t-24", members: ['a', 'b','c', 'd', 'e', 'f'],},
  { id: uuidv4(), content: "second task", cod: "t-24", members: ['a', 'b','c', 'd'],},
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "In Progress",
    items: [{  id: uuidv4(), content: "First task", cod: "t-24", members: ['a', 'b','c', 'd'], },
    { id: uuidv4(), content: "Second task", cod: "t-24", members: ['a', 'b','c', 'd'], },
    { id: uuidv4(), content: "Third task" , cod: "t-24", members: [],},],
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