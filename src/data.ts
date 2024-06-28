export interface Leave {
    id:number
  date: string;
  desc: string;
  type: "M" | "P" | "S";
}

export const DATA: Leave[] = [
  {
    id: 1,
    date: "May 1st",
    desc: "Mandatory",
    type: "M",
  },
  {
    id: 2,
    date: "May 1st",
    desc: "Planned",
    type: "P",
  },
  {
    id: 3,
    date: "May 1st",
    desc: "Mandatory",
    type: "M",
  },
  {
    id: 4,
    date: "May 1st",
    desc: "Sick",
    type: "S",
  },
  {
    id: 5,
    date: "May 1st",
    desc: "Mandatory",
    type: "M",
  },
  {
    id: 6,
    date: "May 1st",
    desc: "Planned",
    type: "P",
  },
  {
    id: 7,
    date: "May wkndkw",
    desc: "Mandatory",
    type: "M",
  },
  {
    id: 8,
    date: "May jsbjsj",
    desc: "Sick",
    type: "S",
  },
  {
    id: 9,
    date: "May sbqjbs",
    desc: "Mandatory",
    type: "M",
  },
  {
    id: 10,
    date: "May wk,ndwk,ndw",
    desc: "Planned",
    type: "P",
  },

];

