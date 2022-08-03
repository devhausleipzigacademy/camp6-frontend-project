import { now, Task, Tasks } from "./TypesNConsts";

// In alphabetical order

export const taskDummy: Task = {
	id: "One",
	name: "Pooping",
	deadline: now,
	topic: "Chores",
	priority: true,
	completed: false,
};

export const tasksDummies: Tasks = [
	// dummies please delete later
	{
		id: "Five",
		name: "Pooping",
		deadline: now,
		topic: "Chores",
		priority: true,
		completed: false,
	},
	{
		id: "Two",
		name: "zorg",
		deadline: now,
		topic: "Medicine",
		description: "dpfjsoigj",
	},
];

export const topicDummy = {
	name: "Guitar",
	track: "Become a Musician",
	tasksTotal: ["Learn a chord", "Learn a second chord", "Buy a Guitar"],
	tasksOpen: ["Learn a chord", "Learn a second chord"],
	tasksCompleted: ["Buy a Guitar"],
	timeSpent: 10,
};

export const topicsDummies: string[] = [
	"Guitar",
	"Medicine",
	"Chores",
	"JavaScript",
];

export const trackDummy = {
	name: "Bowling",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos amet voluptas. Architecto consequatur et recusandae laborum minima possimus, mollitia magni, nobis modi corrupti voluptates porro facere vitae dolores fugiat?",
	topics: ["Chores"],
	tasksOpen: ["hit a pin", "hit two pins"],
	tasksFinished: ["Clean the ball", "polish shoes", "get a bowling shirt"],
	timeSpent: 2134,
};

export const tracksDummies = [
	"Arrays",
	"Objects",
	"Loops",
	"If Statements",
	"Conditionals",
];

export const userDummy = {
	name: "Fatma",
	image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1",
};
