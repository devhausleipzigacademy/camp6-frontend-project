import { useState } from "react";
import { topicsDummies } from "../database/Dummies";
import {
	TaskProp,
	Tasks,
	CreateContext,
	yesterday,
} from "../database/TypesNConsts";
import { ToggleSwitch } from "./buttons/ToggleSwitch";
import { ACTIONS, useTasks, useTasksDispatch } from "./TasksContext";

export function TaskList() {
	const tasks = useTasks() as Tasks;

	if (tasks == undefined || tasks == null) {
		return <p>Oops, looks like you haven't added anything yet</p>;
	}

	return (
		<ul>
			{tasks.map((task) => (
				<li
					key={task.id}
					className="flex w-full p-4 border-slate-300 border-2 rounded-md justify-between items-center  gap-2"
				>
					<TaskItem task={task} />
				</li>
			))}
		</ul>
	);
}

function TaskItem({ task }: TaskProp) {
	// I will probably need these here
	const dispatch = useTasksDispatch() as CreateContext;

	const [taskNameInput, setTaskNameInput] = useState(task.name);
	const [isEditing, setIsEditing] = useState(false);
	const [unconfirmed, setUnconfirmed] = useState(false);

	let taskContent;
	let ConfirmationPrompt;

	if (unconfirmed) {
		ConfirmationPrompt = (
			<div className="bg-secondary w-64 relative bottom-5  ">
				<p>Do you really want to delete the task?</p>
				<div className="flex  flex-row justify-evenly">
					<button
						className="flex justify-center items-center  bg-primary w-fit h-4 p-4 rounded-lg"
						onClick={() => {
							dispatch({ type: ACTIONS.DELETE, payload: { id: task.id } });
						}}
					>
						Yes, delete
					</button>
					<button
						className="flex justify-center items-center  bg-primary w-fit h-4 p-4 rounded-lg"
						onClick={() => {
							setUnconfirmed(false);
						}}
					>
						No, abort
					</button>
				</div>
			</div>
		);
	} else {
		ConfirmationPrompt = (
			<>
				<button className="delete" onClick={() => setUnconfirmed(true)}>
					<svg
						className="w-4 hover:scale-110 hover:fill-slate-500 active:fill-inherit  "
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 512.021 512.021"
					>
						<g>
							<path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
						</g>
					</svg>
				</button>
			</>
		);
	}

	if (isEditing) {
		taskContent = (
			<>
				<input
					type="text"
					value={taskNameInput}
					onChange={(event) => {
						setTaskNameInput(event.target.value);
					}}
				/>

				<button
					className="flex justify-center items-center  bg-primary w-2 h-4 p-4 rounded-lg"
					onClick={() => {
						dispatch({
							type: ACTIONS.CHANGE_NAME,
							payload: { id: task.id, name: taskNameInput },
						});
						setIsEditing(false);
					}}
				>
					Save
				</button>
				<button
					className="flex justify-center items-center  bg-primary w-fit h-4 p-4 rounded-lg"
					onClick={() => {
						setTaskNameInput(task.name);
						setIsEditing(false);
					}}
				>
					Discard
				</button>
			</>
		);
	} else {
		taskContent = (
			<>
				<input
					type="text"
					readOnly
					value={task.name}
					onFocus={() => setIsEditing(true)}
				/>
			</>
		);
	}
	return (
		<>
			{taskContent}
			<div className="flex hover:scale-110 hover:fill-slate-300 hover:text-slate-300 active:text-inherit active:fill-inherit">
				<svg
					id="calendar"
					className="w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
					<circle cx="12" cy="15" r="1.5" />
					<circle cx="7" cy="15" r="1.5" />
					<circle cx="17" cy="15" r="1.5" />
				</svg>
				<input
					required
					value={JSON.stringify(task.deadline).slice(1, 11)}
					name="deadline"
					onChange={(event) => {
						dispatch({
							type: ACTIONS.CHANGE_DEADLINE,
							payload: {
								id: task.id,
								deadline: new Date(event.target.value),
							},
						});
					}}
					// a little magic to prevent setting past deadline
					min={JSON.stringify(yesterday).slice(1, 11)}
					type="date"
				/>
			</div>

			<select
				name="Topic"
				required
				value={task.topic}
				onChange={(event) => {
					dispatch({
						type: ACTIONS.CHANGE_TOPIC,
						payload: {
							id: task.id,
							topic: event.target.value,
						},
					});
				}}
			>
				<option disabled>(please select)</option>
				{topicsDummies.map((element, idx) => (
					<option key={idx} value={element}>
						{element}
					</option>
				))}
			</select>

			<div className="flex items-center   gap-2">
				<ToggleSwitch
					clickHandler={() => {
						dispatch({ type: ACTIONS.PRIORITY, payload: { id: task.id } });
					}}
					value={task.priority}
				></ToggleSwitch>
				{/* <label htmlFor="priority-switch"><input id="priority-switch"
					type="checkbox"
					name="priority"
					checked={task.priority}
					onChange={() => {
						dispatch({ type: ACTIONS.PRIORITY, payload: { id: task.id } });
					}}
				/>{" "}
				<div></div>
				<span className="slider"></span></label> */}
				<label className="text-slate-500 text-sm" htmlFor="priority">
					Is important
				</label>
			</div>

			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					name="completed"
					onChange={() => {
						dispatch({ type: ACTIONS.COMPLETED, payload: { id: task.id } });
					}}
				/>
				<label className="text-slate-500 text-sm" htmlFor="completed">
					Done?
				</label>
			</div>

			{ConfirmationPrompt}
		</>
	);
}
