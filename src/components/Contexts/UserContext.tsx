import { createContext, useContext, useMemo, useReducer } from "react";
import {
	TopicFinder,
	TrackFinder,
} from "../../assets/utilities/FinderFunctions";
import { userData } from "../../database/newDummies";
import {
	Action,
	CreateContext,
	UserData,
	CustomProviderProps,
	Task,
	Track,
	Tracks,
	Topics,
} from "../../database/TypesNConsts";

import { v4 as uuid } from "uuid";
import { trace } from "console";

export const UserContext = createContext<UserData | null>(null);
export const UserDispatchContext = createContext<CreateContext | null>(null);

export function UserProvider({ children }: CustomProviderProps) {
	const [user, dispatch] = useReducer(userReducer, userData);
	// const userMemo = useMemo(() => ({ user }), [user]);

	return (
		<UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
}

export function useUser() {
	return useContext(UserContext);
}

export function useUserDispatch() {
	return useContext(UserDispatchContext);
}

export const USER_ACTIONS = {
	CHANGE_NAME: "change name",
	SET_ACTIVE_TRACK: "select track",
	SET_ACTIVE_TOPIC: "select topic",
	SET_ACTIVE_TASK: "select task",
};

export const TRACK_ACTIONS = {
	UPSERT_TRACK: "add track",
	DELETE: "delete",
};

export const TASK_ACTIONS = {
	SET_DEADLINE: "set deadline",
	ADD_TASK: "add-task",
	CHANGE_DEADLINE: "change deadline",
	COMPLETED: "completed",
	CHANGE_NAME: "change name",
	DELETE: "delete",
	CONFIRM_CHANGE: "confirm change",
	PRIORITY: "toggle priority",
};

function userReducer(user: UserData, action: Action): UserData {
	switch (action.type) {
		//  USER ACTIONS
		case USER_ACTIONS.CHANGE_NAME:
			return { ...user, name: action.payload.name };
		case USER_ACTIONS.SET_ACTIVE_TRACK:
			return { ...user, activeTrackId: action.payload.trackId };
		case USER_ACTIONS.SET_ACTIVE_TOPIC:
			return { ...user, activeTopicId: action.payload.topicId };
		case USER_ACTIONS.SET_ACTIVE_TASK:
			return { ...user, activeTaskId: action.payload.taskId };

		// TRACKS ACTIONS
		case TRACK_ACTIONS.UPSERT_TRACK:
			return { ...user, tracks: createTrack(action.payload.userInput) };

		case TRACK_ACTIONS.DELETE:
			return tracks.filter((track) => track.id !== action.payload.id);
		default:
			return tracks;

		// TASK ACTIONS
		case TASK_ACTIONS.ADD_TASK:
			const selectedTopic = TopicFinder(
				action.payload.trackId,
				action.payload.topicdId
			);
			selectedTopic.tasks;

			return { ...user, tracks: newTask(action.payload.userInput) };

		case TASK_ACTIONS.CHANGE_DEADLINE:
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, deadline: action.payload.deadline };
				} else return task;
			});
		case TASK_ACTIONS.CHANGE_NAME:
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, name: action.payload.name };
				} else return task;
			});
		case TASK_ACTIONS.CHANGE_TOPIC:
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, topic: action.payload.topic };
				} else return task;
			});
		case TASK_ACTIONS.PRIORITY:
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, priority: !task.priority };
				} else return task;
			});
		case TASK_ACTIONS.COMPLETED:
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, completed: !task.completed };
				} else return task;
			});
		case TASK_ACTIONS.DELETE:
			return tasks.filter((task) => task.id !== action.payload.id);

			return;
		default:
			return user;
	}
}

function newTask(userInput: Task): Task {
	return {
		id: parseInt(uuid()),
		name: userInput.name,
		deadline: userInput.deadline,
		topic: userInput.topic,
		description: userInput.description,
		priority: userInput.priority,
		completed: false,
	};
}

function createTrack(userInput: {
	id: number;
	title?: string;
	completed?: boolean;
	topics?: Topics;
}): Tracks {
	let { id, ...userInputOmmittedId } = userInput;
	return userData.tracks.set(id, userInputOmmittedId);
}

function updateTrack(userInput: Track): Track[] {
	const specificTrack = TrackFinder(userInput.id);

	return [];
}
