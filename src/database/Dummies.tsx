import { now, Resource, Resources, Task, Tasks } from "./TypesNConsts";

// need to assign and create type for tracks and topics

// In alphabetical order

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
	"Loops",
	"If Statements",
	"Conditionals",
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
	"Bowling",
	"Guitar",
	"Medicine",
	"Chores",
	"JavaScript",
];

export const userDummy = {
	name: "Fatma",
	image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1",
};
