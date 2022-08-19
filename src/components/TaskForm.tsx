import { useState } from "react";
import {
	CreateContext,
	InitialTask,
	initialTask,
	yesterday,
} from "../types/TypesNConsts";
import { ToggleSwitch } from "./buttons/ToggleSwitch";

import { useTasksDispatch, ACTIONS } from "./TasksContext";

export function TaskForm() {
	const [error, SetError] = useState("");
	const [userInput, SetUserInput] = useState<InitialTask>(initialTask);
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
			<div className="flex h-full w-full flex-col p-2">
				<h2 className="self-start">Add Task</h2>
				<form
					onSubmit={handleSubmit}
					className="flex h-full w-full flex-col justify-evenly gap-6 p-6 text-customTextColorLight"
				>
					<input
						className="rounded-md border p-1 pl-4"
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
							Select Track
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
							className="-mt-6 flex items-center gap-2"
						>
							<ToggleSwitch
								clickHandler={() => {
									SetUserInput({ ...userInput, priority: !userInput.priority });
								}}
								value={userInput.priority}
							/>
						</div>
						<button
							className="flex bg-transparent text-customTextColorMedium"
							type="submit"
						>
							Reset
						</button>
						<button
							className="flex h-2 w-24 items-center justify-center self-end justify-self-end rounded-xl bg-primary p-6 text-customTextColorDark"
							type="submit"
						>
							Create Task
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
