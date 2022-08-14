import { Dispatch, ReactNode } from "react";

// In alphabetical order

export type Action = {
	type: string;
	payload: any;
};

export type CreateContext = Dispatch<Action>;

export type CustomButtonProps = {
	text?: string;
	clickHandler: any;
};

export type CustomSwitchProps = {
	text?: string;
	value: boolean | undefined;
	clickHandler: any;
};

export const now = new Date();
export const yesterday: Date = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export type InitialTask =
	| Task
	| {
			id?: string;
			name: string;
			deadline: Date | "dd / mm / yyyy";
			topic: string;
			description?: string;
			priority?: boolean;
			completed?: boolean;
	  };

export type InitialTaskFormInput = {
	id?: string;
	name: string;
	deadline: Date | "dd / mm / yyyy";
	topicTitle: string;
	trackTitle: string;
	topicId: number;
	trackId: number;
	description?: string;
	priority?: boolean;
	completed?: boolean;
};

export type RecommendedItemProps = {
	image: string;
	link: string;
	title: string;
	recommendationCount: number;
};

export type Resource = {
	title: string;
	hyperlink: string;
	image: string | HTMLImageElement;
	description: string;
	track: string;
};

export type Resources = Resource[];

export type Task = {
	id: number;
	name: string;
	deadline: Date;
	topic: string;
	description?: string;
	priority?: boolean;
	completed?: boolean;
	timeSpent?: number;
};

export type TaskProp = {
	task: Task;
};

export type Tasks = Task[];

export type TasksProviderProps = {
	children: ReactNode;
	trackId: number;
	topicId: number;
};

export type TopicsProviderProps = { children: ReactNode; trackId: number };

export type TracksProviderProps = { children: ReactNode };

export type CustomProviderProps = {
	children: ReactNode;
};

export type TimerAction = {
	type: string;
	payload?: any;
};

export type TimerDisplay = "Work" | "Break";

export type TimerValues = {
	activeTime: 0 | 1;
	minutesRemaining: number;
	paused: boolean;
	secondsRemaining: number;
	timeIntervals: [number, number];
	timerDisplay: string;
	timerEnded: boolean;
	track: string;
	topic: string;
	task: string;
	selector: number;
	timerState: JSX.Element;
};

export type Topic = {
	title: string;
	id: number;
	completed?: boolean;
	tasks?: [...Tasks];
};

export type Topics = Topic[];

export type Track = {
	title: string;
	id: number;
	completed?: boolean;
	topics?: [...Topics];
};

export type Tracks = Track[];

export type UserData = {
	name: string;
	imageLink?: string;
	imagePNG?: string;
	activeTrackId: number;
	activeTopicId: number;
	tracks: [...Tracks];
};
