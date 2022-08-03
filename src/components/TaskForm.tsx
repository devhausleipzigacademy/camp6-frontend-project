import { useState } from "react";
import { topicsDummies } from "../database/Dummies";
import { InitialTask, yesterday } from "../database/TypesNConsts";

import {
	useTasks,
	useTasksDispatch,
	TasksProvider,
	CreateContext,
	ACTIONS,
} from "./TasksContext";

//
// note: need to do something about deadline times
//

const initialTask: InitialTask = {
	name: "",
	deadline: "dd / mm / yyyy",
	topic: "default",
	description: "",
};

export function TaskForm() {
	const [userInput, SetUserInput] = useState<InitialTask>(initialTask);
	const tasks = useTasks();
	const dispatch = useTasksDispatch() as CreateContext;

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch({ type: ACTIONS.ADD_TASK, payload: { userInput: userInput } });
		SetUserInput(initialTask);
		const calendar = document.getElementById(
			"deadline-calendar"
		) as HTMLInputElement;
		calendar.value = calendar.defaultValue;
	}

	return (
		<>
			{/* 
// 
// Hi! 
// Please delete the br and h2 tag below. 
// Thanks!
//  */}
			<br />
			<h2 className="subheading">Task Form Component</h2>
			<form onSubmit={handleSubmit} className="flex flex-col p-6 gap-6">
				<input
					required
					type="text"
					placeholder="Name*"
					name="name"
					value={userInput.name}
					onChange={(event) => {
						SetUserInput({ ...userInput, name: event.target.value });
					}}
				/>
				<input
					required
					name="deadline"
					value={JSON.stringify(userInput.deadline).slice(1, 11)}
					onChange={(event) => {
						SetUserInput({
							...userInput,
							deadline: new Date(event.target.value),
						});
					}}
					// a little magic to prevent setting past deadline
					min={JSON.stringify(yesterday).slice(1, 11)}
					type="date"
				/>
				<select
					name="Topic"
					required
					id="topic"
					value={userInput.topic}
					onChange={(event) => {
						SetUserInput({ ...userInput, topic: event.target.value });
					}}
				>
					<option disabled value="default">
						(please select)
					</option>
					{topicsDummies.map((element) => (
						<option value={element}>{element}</option>
					))}
				</select>

				<textarea
					placeholder="Description"
					name="description"
					value={userInput.description}
					onChange={(event) => {
						SetUserInput({ ...userInput, description: event.target.value });
					}}
				/>
				<div className="flex justify-between">
					<div
						id="priorityInputAndLabel"
						className="flex gap-2 -mt-6 items-center"
					>
						<input
							id="priority"
							type="checkbox"
							name="priority"
							onChange={(event) => {
								SetUserInput({
									...userInput,
									priority: event.target.checked,
								});
							}}
						/>
						<label htmlFor="priority">High Priority</label>
					</div>
					<button
						className="bg-primary p-6 rounded-xl w-24 h-2 flex items-center justify-center self-end justify-self-end    "
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>

			{/* 
// 
// These two pre lines we should delete at some point
//  */}
			<div
				id="Testing Stage"
				className="flex flex-col gap-6 border-rose-700 border-4   border-solid"
			>
				<h2 className="subheading text-xl">User Input</h2>
				<pre>{JSON.stringify(userInput)} </pre>
				<br />
				<h2 className="subheading text-xl">Tasks List</h2>
				<pre>{JSON.stringify(tasks)} </pre>
			</div>
		</>
	);
}
