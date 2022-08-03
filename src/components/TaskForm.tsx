import { useState } from "react";
import { topicsDummies } from "../database/Dummies";
import { InitialTask, initialTask, yesterday } from "../database/TypesNConsts";

import {
	useTasks,
	useTasksDispatch,
	CreateContext,
	ACTIONS,
} from "./TasksContext";

export function TaskForm() {
	const [error, SetError] = useState("");
	const [userInput, SetUserInput] = useState<InitialTask>(initialTask);
	const tasks = useTasks();
	const dispatch = useTasksDispatch() as CreateContext;

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (userInput.topic === "default") {
			SetError("Please choose a topic");
		} else {
			dispatch({ type: ACTIONS.ADD_TASK, payload: { userInput: userInput } });
			SetError("");
			SetUserInput(initialTask);
			const calendar = document.getElementById(
				"deadline-calendar"
			) as HTMLInputElement;
			calendar.value = calendar.defaultValue;
		}
	}

	return (
		<>
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
				{error && <p className="error text-red-500   ">{error}</p>}
				<select
					name="Topic"
					required
					id="topic"
					value={userInput.topic}
					onMouseDown={() => {
						SetError("");
					}}
					onChange={(event) => {
						SetUserInput({ ...userInput, topic: event.target.value });
					}}
				>
					<option disabled value="default">
						(please select)
					</option>
					{topicsDummies.map((element, idx) => (
						<option key={idx} value={element}>
							{element}
						</option>
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
		</>
	);
}
