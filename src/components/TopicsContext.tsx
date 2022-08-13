import { createContext, useContext, useReducer } from "react";
import { tracksDummies } from "../database/newDummies";
import {
	Action,
	CreateContext,
	Topic,
	Topics,
	TopicsProviderProps,
	Track,
} from "../database/TypesNConsts";
import { v4 as uuid } from "uuid";
import { TrackFinder } from "../assets/utilities/FinderFunctions";

export const TopicsContext = createContext<Track[] | null>(null);
export const TopicsDispatchContext = createContext<CreateContext | null>(null);

export function topicsProvider({ children, trackId }: TopicsProviderProps) {
	const selectedTrack = TrackFinder(trackId);

	if (selectedTrack.topics == undefined) {
		throw Error;
	} else {
		const [topics, dispatch] = useReducer(topicsReducer, selectedTrack.topics);
	}

	return (
		<TopicsContext.Provider value={topics}>
			<TopicsDispatchContext.Provider value={dispatch}>
				{children}
			</TopicsDispatchContext.Provider>
		</TopicsContext.Provider>
	);
}

export function useTopics() {
	return useContext(TopicsContext);
}

export function useTopicsDispatch() {
	return useContext(TopicsDispatchContext);
}

export const ACTIONS = {
	ADD_TOPIC: "add topic",
	COMPLETED: "completed",
	ADD_TASK: "add task",
	CHANGE_TITLE: "change title",
	CONFIRM_CHANGE: "confirm change",
	DELETE: "delete",
};

function topicsReducer(topics: Topics, action: Action): Topics {
	switch (action.type) {
		case ACTIONS.ADD_TOPIC:
			return [...topics, newTopic(action.payload.userInput)];
		case ACTIONS.CHANGE_TITLE:
			return topics.map((topic) => {
				if (topic.id === action.payload.id) {
					return { ...topic, title: action.payload.title };
				} else return topics;
			});
		case ACTIONS.ADD_TOPIC:
			return topics.map((track) => {
				if (track.id === action.payload.id) {
					return { ...track, topics: action.payload.topic };
				} else return track;
			});
		case ACTIONS.COMPLETED:
			return topics.map((track) => {
				if (track.id === action.payload.id) {
					return { ...track, completed: !track.completed };
				} else return track;
			});
		case ACTIONS.DELETE:
			return topics.filter((track) => track.id !== action.payload.id);
		default:
			return topics;
	}
}

function newTopic(userInput: Topic): Topic {
	return {
		id: parseInt(uuid()),
		title: userInput.title,
		tasks: userInput.tasks,
		completed: false,
	};
}
