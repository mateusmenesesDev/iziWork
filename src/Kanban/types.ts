export interface Iitem {
  id: string;
  content: string;
  cod: string;
  members: string[];
}

export interface Icolumn {
  name: string;
  items: Iitem[];
}

export interface Icollumns  {
  [key: string]: Icolumn;
}