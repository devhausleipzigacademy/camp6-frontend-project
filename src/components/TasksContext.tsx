import {
	createContext,
	Dispatch,
	ReactNode,
	useContext,
	useReducer,
} from "react";
import { tasksDummies } from "../database/Dummies";
import { Task, Action, Tasks } from "../database/TypesNConsts";
import { v4 as uuid } from "uuid";

export type CreateContext = Dispatch<Action>;
type ChildrenProps = {
	children: ReactNode;
};

export const TasksContext = createContext<Tasks | null>(null);
export const TasksDispatchContext = createContext<CreateContext | null>(null);

export function TasksProvider({ children }: ChildrenProps) {
	const [tasks, dispatch] = useReducer(tasksReducer, tasksDummies);

	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatchContext.Provider value={dispatch}>
				{children}
			</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	);
}

export function useTasks() {
	return useContext(TasksContext);
}

export function useTasksDispatch() {
	return useContext(TasksDispatchContext);
}

export const ACTIONS = {
	ADD_TASK: "add-task",
	CHANGE_DEADLINE: "change deadline",
	COMPLETED: "completed",
	CHANGE_TOPIC: "change topic",
	CHANGE_NAME: "change name",
	DELETE: "delete",
	CONFIRM_CHANGE: "confirm change",
};

function tasksReducer(tasks: Tasks, action: Action): Tasks {
	switch (action.type) {
		case ACTIONS.ADD_TASK:
			return [...tasks, newTask(action.payload.userInput)];
		case ACTIONS.CHANGE_DEADLINE:
			tasks.map((task) => {
				if (task.id === action.payload.taskId) {
					return { ...task, deadline: action.payload.deadline };
				} else return task;
			});
		case ACTIONS.CHANGE_NAME: {
			console.log("dispatch run", action.payload);
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, name: action.payload.name };
				} else return task;
			});
		}
		case ACTIONS.COMPLETED:
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, completed: !task.completed };
				} else return task;
			});
		case ACTIONS.DELETE:
			return tasks.filter((task) => task.id !== action.payload.id);
		default:
			return tasks;
	}
}

function newTask(userInput: Task): Task {
	return {
		id: uuid(),
		name: userInput.name,
		deadline: userInput.deadline,
		topic: userInput.topic,
		description: userInput.description,
		priority: userInput.priority,
		completed: false,
	};
}
