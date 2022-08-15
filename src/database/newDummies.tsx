import { UserData } from "./TypesNConsts";

export const userData: UserData = {
	name: "Fatma",
	imageLink: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1",
	imagePNG: "../assets/ProfilePicture.png",

	activeTrackId: 13464575674545,
	activeTopicId: 1346457567234534,
	activeTaskId: 2,
	tracks: new Map(
		arrToKVPair([
			{
				title: "JavaScript",
				id: 13464575674545,
				completed: false,
				topics: new Map(
					arrToKVPair([
						{
							title: "Arrays",
							id: 1346457567234534,
							completed: false,
							tasks: new Map(
								arrToKVPair([
									{
										id: 2,
										name: "Read about arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 4,
										name: "Use arrays 10 times",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 5,
										name: "Finish CodeCademy chapter on arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 6,
										name: "Write blog post about arrays",
										deadline: new Date("2022/08/16"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 7,
										name: "Design tattoo with array",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 4655,
										name: "Design tattoo with asci",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: true,
									},
									{
										id: 57543,
										name: "Get a laptop",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: true,
									},
									{
										id: 678987654,
										name: "Install Visual Studio Code",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: true,
									},
								])
							),
						},
						{
							title: "Objects",
							id: 23535645,
							completed: false,
							tasks: new Map(
								arrToKVPair([
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
								])
							),
						},
						{
							title: "Classes",
							id: 235,
							completed: false,
							tasks: new Map(
								arrToKVPair([
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
								])
							),
						},
					])
				),
			},
			{
				title: "Guitar",
				id: 134645747874545,
				completed: false,
				topics: new Map(
					arrToKVPair([
						{
							title: "C-Cords",
							id: 13464000568724534,
							completed: false,
							tasks: new Map(
								arrToKVPair([
									{
										id: 22,
										name: "Read about arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 24,
										name: "Use arrays 10 times",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 25,
										name: "Finish CodeCademy chapter on arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 26,
										name: "Write blog post about arrays",
										deadline: new Date("2022/08/16"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 27,
										name: "Design tattoo with array",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
								])
							),
						},
					])
				),
			},
			{
				title: "Cooking",
				id: 1346453487874545,
				completed: false,
				topics: new Map(
					arrToKVPair([
						{
							title: "Cutting",
							id: 134666546568724534,
							completed: false,
							tasks: new Map(
								arrToKVPair([
									{
										id: 32,
										name: "Read about arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 34,
										name: "Use arrays 10 times",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 35,
										name: "Finish CodeCademy chapter on arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 36,
										name: "Write blog post about arrays",
										deadline: new Date("2022/08/16"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 37,
										name: "Design tattoo with array",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
								])
							),
						},
					])
				),
			},
			{
				title: "Tap Dance",
				id: 1342223227874545,
				completed: false,
				topics: new Map(
					arrToKVPair([
						{
							title: "Warm Up",
							id: 134645757687624534,
							completed: false,
							tasks: new Map(
								arrToKVPair([
									{
										id: 42,
										name: "Read about arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 44,
										name: "Use arrays 10 times",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 45,
										name: "Finish CodeCademy chapter on arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 46,
										name: "Write blog post about arrays",
										deadline: new Date("2022/08/16"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 47,
										name: "Design tattoo with array",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
								])
							),
						},
					])
				),
			},
			{
				title: "React",
				id: 13422237874545,
				completed: false,
				topics: new Map(
					arrToKVPair([
						{
							title: "Hooks",
							id: 13464598988724534,
							completed: false,
							tasks: new Map(
								arrToKVPair([
									{
										id: 52,
										name: "Read about arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 54,
										name: "Use arrays 10 times",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 55,
										name: "Finish CodeCademy chapter on arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 56,
										name: "Write blog post about arrays",
										deadline: new Date("2022/08/16"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 57,
										name: "Design tattoo with array",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
								])
							),
						},
					])
				),
			},
			{
				title: "Japanese",
				id: 13422235974545,
				completed: false,
				topics: new Map(
					arrToKVPair([
						{
							title: "Kanji",
							id: 1346459968724534,
							completed: false,
							tasks: new Map(
								arrToKVPair([
									{
										id: 62,
										name: "Read about arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 64,
										name: "Use arrays 10 times",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: true,
										completed: false,
									},
									{
										id: 65,
										name: "Finish CodeCademy chapter on arrays",
										deadline: new Date("2022/08/15"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 66,
										name: "Write blog post about arrays",
										deadline: new Date("2022/08/16"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
									{
										id: 67,
										name: "Design tattoo with array",
										deadline: new Date("2022/08/17"),
										topic: "Arrays",
										priority: false,
										completed: false,
									},
								])
							),
						},
					])
				),
			},
		])
	),
};

export const colorsArray = [
	"bg-customYellowLight",
	"bg-customGreenLight",
	"bg-customPinkLight",
	"bg-secondaryLight",
	"bg-customPurpleLight",
];

function arrToKVPair(arr: Array<any>) {
	return arr.reduce(function (r, e) {
		r[e.id] = { ...e };
		return r;
	}, {});
}
