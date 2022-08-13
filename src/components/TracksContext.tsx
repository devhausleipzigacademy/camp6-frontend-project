import { createContext, useContext, useReducer } from "react";
import { tracksDummies } from "../database/newDummies";
import {
	Action,
	CreateContext,
	TracksProviderProps,
	Track,
} from "../database/TypesNConsts";
import { v4 as uuid } from "uuid";

export const TracksContext = createContext<Track[] | null>(null);
export const TracksDispatchContext = createContext<CreateContext | null>(null);

export function tracksProvider({ children }: TracksProviderProps) {
	const [tracks, dispatch] = useReducer(tracksReducer, tracksDummies);

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
	ADD_Track: "add-track",
	COMPLETED: "completed",
	ADD_TOPIC: "add topic",
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
