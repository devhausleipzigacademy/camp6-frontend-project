import { useState } from "react";
import { TopicFinder, TrackFinder } from "../assets/utilities/FinderFunctions";
import {
	CreateContext,
	InitialTaskFormInput,
	Tasks,
	Topics,
	Track,
	UserData,
	yesterday,
} from "../database/TypesNConsts";
import { ToggleSwitch } from "./buttons/ToggleSwitch";

import { useTasks, useTasksDispatch, ACTIONS } from "./Contexts/TasksContext";
import { useTopics } from "./Contexts/TopicsContext";
import { useTracks } from "./Contexts/TracksContext";
import { USERACTIONS, useUser, useUserDispatch } from "./Contexts/UserContext";

export function TaskForm() {
	const user = useUser() as UserData;

	const initialTaskFormInput: InitialTaskFormInput = {
		name: "Name*",
		deadline: "dd / mm / yyyy",
		description: "",
		topicTitle: "default",
		trackTitle: "default",
		trackId: user.activeTrackId,
		topicId: user.activeTopicId,
	};

	const [error, SetError] = useState("");
	const [userInput, SetUserInput] =
		useState<InitialTaskFormInput>(initialTaskFormInput);
	const tasks = useTasks() as Tasks;
	const topics = useTopics() as Topics;
	const tracks = useTracks() as Track[];
	const userDispatch = useUserDispatch() as CreateContext;
	const dispatch = useTasksDispatch() as CreateContext;

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (
			userInput.topicTitle === "default" ||
			userInput.trackTitle === "default"
		) {
			SetError("Please choose a topic");
		} else {
			const activeIds = {
				trackId: user.activeTrackId,
				topicId: user.activeTrackId,
			};

			userDispatch({
				type: USERACTIONS.SELECT_TOPIC,
				payload: { topicId: userInput.topicId },
			});
			userDispatch({
				type: USERACTIONS.SELECT_TRACK,
				payload: { trackId: userInput.trackId },
			});
			dispatch({ type: ACTIONS.ADD_TASK, payload: { userInput: userInput } });
			userDispatch({
				type: USERACTIONS.SELECT_TOPIC,
				payload: { topicId: activeIds.topicId },
			});
			userDispatch({
				type: USERACTIONS.SELECT_TRACK,
				payload: { trackId: activeIds.trackId },
			});
			SetError("");
			SetUserInput(initialTaskFormInput);
			const calendar = document.getElementById(
				"deadline-calendar"
			) as HTMLInputElement;
			calendar.value = calendar.defaultValue;
		}
	}

	return (
		<>
			<h2 className="self-start ">Add Task</h2>
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
					name="Track"
					required
					id="track"
					value={userInput.trackTitle}
					onMouseDown={() => {
						SetError("");
					}}
					onChange={(event) => {
						const inputId = parseInt(event.target.value);
						SetUserInput({
							...userInput,
							trackId: inputId,
							trackTitle: TrackFinder(inputId).title,
						});
					}}
				>
					<option disabled value="default">
						(please select)
					</option>
					{tracks.map((track, idx) => (
						<option key={idx} value={track.id}>
							{track.title}
						</option>
					))}
				</select>

				<select
					name="Topic"
					required
					id="topic"
					value={userInput.topicTitle}
					onMouseDown={() => {
						SetError("");
					}}
					onChange={(event) => {
						const inputId = parseInt(event.target.value);
						SetUserInput({
							...userInput,
							topicId: inputId,
							topicTitle: TopicFinder(userInput.trackId, inputId).title,
						});
					}}
				>
					<option disabled value="default">
						(please select)
					</option>
					{topics.map((topic, idx) => (
						<option key={idx} value={topic.id}>
							{topic.title}
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
							<ToggleSwitch
								clickHandler={() => {
									SetUserInput({ ...userInput, priority: !userInput.priority });
								}}
								value={userInput.priority}
							/>
						</div>
						<button
							className="bg-transparent text-customTextColorMedium flex"
							type="submit"
						>
							Reset
						</button>
						<button
							className="bg-primary p-6 rounded-xl w-24 h-2 flex items-center justify-center self-end justify-self-end text-customTextColorDark"
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
