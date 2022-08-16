import { now, Resource, Resources, Task, Tasks } from "../types/TypesNConsts";

// need to assign and create type for tracks and topics

// In alphabetical order

const tracks = new Map();

export const breakLengthDefault: number = 5;

export const ResourceDummy: Resource = {
  title: "Simple trick to learn faster",
  hyperlink: "https://lmgtfy.app/",
  image: "https://www.theverge.com/tldr/22289657/never-gonna-give-you-up-4k",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis facere a veniam tempora ut, sit non quia at quis nemo possimus iure libero veritatis aperiam assumenda, aspernatur ea odit?",
  track: "Guitar",
};

export const ResourcesDummies: Resources = [ResourceDummy, ResourceDummy];

export const taskDummy: Task = {
  id: 1,
  name: "SmartyPantsify",
  deadline: now,
  topic: "Chores",
  priority: true,
  completed: false,
};

export const tasksDummies: Tasks = [
  // dummies please delete later

  {
    id: 8,
    name: "Read about objects",
    deadline: new Date("2022/09/17"),
    topic: "Objects",
    priority: false,
    completed: false,
  },
  {
    id: 9,
    name: "Use objects 10 times",
    deadline: new Date("2022/09/17"),
    topic: "Objects",
    priority: false,
    completed: false,
  },
  {
    id: 10,
    name: "Finish CodeCademy chapter on objects",
    deadline: new Date("2022/08/11"),
    topic: "Objects",
    priority: false,
    completed: false,
  },
  {
    id: 11,
    name: "Write blog post about objects",
    deadline: new Date("2022/09/17"),
    topic: "Objects",
    priority: false,
    completed: false,
  },
  {
    id: 12,
    name: "Design tattoo with object",
    deadline: new Date("2022/09/17"),
    topic: "Objects",
    priority: false,
    completed: false,
  },

  {
    id: 13,
    name: "Read about classes",
    deadline: new Date("2022/10/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 14,
    name: "Use classes 10 times",
    deadline: new Date("2022/10/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 15,
    name: "Finish CodeCademy chapter on classes",
    deadline: new Date("2022/10/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 16,
    name: "Write blog post about classes",
    deadline: new Date("2022/10/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 17,
    name: "Design tattoo with class",
    deadline: new Date("2022/10/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 18,
    name: "Read about loops",
    deadline: new Date("2022/11/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 19,
    name: "Use loops 10 times",
    deadline: new Date("2022/11/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 20,
    name: "Finish CodeCademy chapter on loops",
    deadline: new Date("2022/11/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 21,
    name: "Write blog post about loops",
    deadline: new Date("2022/11/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 22,
    name: "Design tattoo with loops",
    deadline: new Date("2022/11/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 23,
    name: "Read about if statements",
    deadline: new Date("2022/12/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 24,
    name: "Use if statements 10 times",
    deadline: new Date("2022/12/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 25,
    name: "Finish CodeCademy chapter on if statements",
    deadline: new Date("2022/12/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 26,
    name: "Write blog post about if statements",
    deadline: new Date("2022/12/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
  {
    id: 27,
    name: "Design tattoo with if statements",
    deadline: new Date("2022/12/17"),
    topic: "Classes",
    priority: false,
    completed: false,
  },
];

export const topicDummy = {
  name: "First Steps",
  track: "Guitar",
  tasksTotal: ["Learn a chord", "Learn a second chord", "Buy a Guitar"],
  tasksOpen: ["Learn a chord", "Learn a second chord"],
  tasksCompleted: ["Buy a Guitar"],
  timeSpent: 10,
};

export const topicsDummies: string[] = [
  "Arrays",
  "Objects",
  "Classes",
  "Loops",
  "If Statements",
];

export const trackDummy = {
  name: "Bowling",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos amet voluptas. Architecto consequatur et recusandae laborum minima possimus, mollitia magni, nobis modi corrupti voluptates porro facere vitae dolores fugiat?",
  topics: ["Turkeys", "Trick Shots"],
  tasksOpen: ["hit a pin", "hit two pins"],
  tasksFinished: ["Clean the ball", "polish shoes", "get a bowling shirt"],
  timeSpent: 2134,
};

export const tracksDummies = [
  "JavaScript",
  "Guitar",
  "Cooking",
  "Tap Dance",
  "React",
  "Japanese",
];

export const userDummy = {
  name: "Fatma",
  image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1",
};

export const workLengthDefault: number = 25;
