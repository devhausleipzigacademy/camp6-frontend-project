import { createContext, useContext, useReducer } from "react";
import {
	Action,
	CreateContext,
	TracksProviderProps,
	Track,
	UserData,
	Task,
	InitialTaskFormInput,
	Tasks,
} from "../../database/TypesNConsts";
import { v4 as uuid } from "uuid";
import { useUser } from "./UserContext";

export const TracksContext = createContext<Track[] | null>(null);
export const TracksDispatchContext = createContext<CreateContext | null>(null);

export function TracksProvider({ children }: TracksProviderProps) {
	const user = useUser() as UserData;

	const [tracks, dispatch] = useReducer(tracksReducer, user.tracks);

	return (
		<TracksContext.Provider value={tracks}>
			<TracksDispatchContext.Provider value={dispatch}>
				{children}
			</TracksDispatchContext.Provider>
		</TracksContext.Provider>
	);
}

export function useTracks() {
	return useContext(TracksContext);
}

export function useTracksDispatch() {
	return useContext(TracksDispatchContext);
}

export const ACTIONS = {
	ADD_TASK: "add-task",
	ADD_Track: "add-track",
	ADD_TOPIC: "add topic",
	COMPLETED: "completed",
	CHANGE_TITLE: "change title",
	CONFIRM_CHANGE: "confirm change",
	DELETE: "delete",
};

function tracksReducer(tracks: Track[], action: Action): Track[] {
	switch (action.type) {
		case ACTIONS.ADD_Track:
			return [...tracks, newTrack(action.payload.userInput)];
		case ACTIONS.CHANGE_TITLE:
			return tracks.map((track) => {
				if (track.id === action.payload.id) {
					return { ...track, title: action.payload.title };
				} else return track;
			});
		case ACTIONS.ADD_TOPIC:
			return tracks.map((track) => {
				if (track.id === action.payload.id) {
					return { ...track, topics: action.payload.topic };
				} else return track;
			});
		case ACTIONS.COMPLETED:
			return tracks.map((track) => {
				if (track.id === action.payload.id) {
					return { ...track, completed: !track.completed };
				} else return track;
			});
		case ACTIONS.DELETE:
			return tracks.filter((track) => track.id !== action.payload.id);
		default:
			return tracks;
	}
}

function newTrack(userInput: Track): Track {
	return {
		id: parseInt(uuid()),
		title: userInput.title,
		topics: userInput.topics,
		completed: false,
	};
}

function newTask(userInput: InitialTaskFormInput): Task {
	return {
		id: parseInt(uuid()),
		name: userInput.name,
		deadline: userInput.deadline,
		description: userInput.description,
		priority: userInput.priority,
		completed: false,
	};
}
