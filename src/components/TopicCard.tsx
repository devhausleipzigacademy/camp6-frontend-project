import {
	TaskProp,
	CreateContext,
	Topics,
	Task,
} from "../database/TypesNConsts";
import { ACTIONS, useTasksDispatch } from "./Contexts/TasksContext";
import { v4 as uuid } from "uuid";
import { TopicFinder } from "../assets/utilities/FinderFunctions";
import { colorsArray } from "../database/newDummies";
import { useTopics } from "./Contexts/TopicsContext";
import { useState } from "react";
import { tasksDummies } from "../database/Dummies";

type TopicListProps = { topicId: number; trackId: number; colorId: number };

export function TopicCard({ topicId, trackId, colorId }: TopicListProps) {
	const topics = useTopics() as Topics;

	const selectedTopic = TopicFinder(trackId, topicId);
	const TopicIndex = topics.indexOf(selectedTopic);

	console.log(topics[TopicIndex].tasks);
	const tasksFound = selectedTopic.tasks;
	const [tasks, SetTasks] = useState(tasksFound);
	if (tasks === undefined) throw Error;

	const topicCardColor = `${colorsArray[colorId]}`;
	const classes = `flex items-center w-52 h-8 ${topicCardColor} rounded-t-md`;

	return (
		<div className="pb-7">
			<div id={topicId.toString()} className={classes}>
				<h2 className="text-customTextColorDark font-subheading text-sm font-medium pl-5 ">
					{selectedTopic.title}
				</h2>
			</div>

			<ul>
				{tasks
					.filter((task) => !task.completed ?? false)
					.map((task) => (
						<li
							key={task.id}
							className="flex p-3 border-r border-b rounded-sm  justify-between items-center gap-2 h-9 bg-white max-w-5xl "
						>
							<TaskItem task={task} />
						</li>
					))}
				<li
					key={uuid()}
					className="flex p-3 border-r border-b rounded-b-md rounded-t-sm  justify-between items-center gap-2 h-9 bg-white max-w-5xl"
				>
					{/* <AddTaskItem trackId={trackId} topicId={topicId} /> */}
				</li>
			</ul>
		</div>
	);
}

function TaskItem({ task }: TaskProp) {
	const date = JSON.stringify(task.deadline).slice(1, 11);
	const [eachTask, SetTask] = useState(task);
	console.log(eachTask);

	return (
		<>
			<div className="flex flex-row w-full h-full gap-5 items-center">
				<input
					type="checkbox"
					name="completed"
					onChange={() => {
						SetTask({ ...task, completed: !task.completed });
					}}
				/>

				<p className="text-xs">{task.name}</p>

				<p className="text-xs text-customTextColorLight ">Due: {date}</p>
			</div>
		</>
	);
}

// function AddTaskItem({ topicId }: TopicListProps) {
//   const [userInput, SetUserInput] = useState({
//     name: "",
//     deadline: now,
//   });
//   const [taskNameConfirmed, SetTaskNameConfirmed] = useState(false);
//   const [taskDeadlineConfirmed, SetTaskDeadlineConfirmed] = useState(false);
//   const dispatch = useTasksDispatch() as CreateContext;

//   return (
//     <>
//       <div className="flex flex-row w-full h-full gap-5 items-center ">
//         <input disabled type="checkbox" name="completed" />
//         <input
//           placeholder="Add task"
//           type="text"
//           required
//           className="text-xs text-customTextColorDark font-bodyText"
//           value={userInput.name}
//           onChange={(event) => {
//             SetTaskNameConfirmed(true);
//             SetUserInput({ ...userInput, name: event.target.value });
//           }}
//         />
//         <input
//           type="date"
//           required
//           className={
//             taskNameConfirmed
//               ? "text-xs text-customTextColorLight font-bodyText"
//               : "invisible"
//           }
//           value={JSON.stringify(userInput.deadline).slice(1, 11)}
//           onChange={(event) => {
//             SetUserInput({
//               ...userInput,
//               deadline: new Date(event.target.value),
//             });
//             SetTaskDeadlineConfirmed(true);
//           }}
//         />
//         <button
//           type="button"
//           className={
//             taskDeadlineConfirmed
//               ? "min-w-min h-5 bg-primary rounded-md relative"
//               : "invisible"
//           }
//           onClick={() => {
//             dispatch({
//               type: ACTIONS.ADD_TASK,
//               payload: { userInput: userInput },
//             });
//           }}
//         >
//           <span className="text-xs flex items-center justify-center px-4 font-bodyText text-customTextColorDark">
//             Add Task
//           </span>
//         </button>
//       </div>
//     </>
//   );
// }
