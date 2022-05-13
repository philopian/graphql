export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  married: boolean;
};

export const users: User[] = [
  {
    id: 1,
    name: "Meghann Detoc",
    email: "mdetoc0@g.co",
    age: 40,
    gender: "Agender",
    married: true,
  },
  {
    id: 2,
    name: "Fanya McCombe",
    email: "fmccombe1@nasa.gov",
    age: 30,
    gender: "Female",
    married: true,
  },
  {
    id: 3,
    name: "Ame Alessandrelli",
    email: "aalessandrelli2@printfriendly.com",
    age: 33,
    gender: "Female",
    married: false,
  },
  {
    id: 4,
    name: "Murdock Chandler",
    email: "mchandler3@eventbrite.com",
    age: 43,
    gender: "Non-binary",
    married: false,
  },
  {
    id: 5,
    name: "Sylvia Bendall",
    email: "sbendall4@theglobeandmail.com",
    age: 35,
    gender: "Female",
    married: true,
  },
];
