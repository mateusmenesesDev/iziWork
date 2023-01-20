import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "First task" },
  { id: uuidv4(), content: "Second task" },
  { id: uuidv4(), content: "Third task" },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "In Progress",
    items: [{  id: uuidv4(), content: "First task" },
    { id: uuidv4(), content: "Second task" },
    { id: uuidv4(), content: "Third task" },],
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