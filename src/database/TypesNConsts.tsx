// need to assign and create type for tracks and topics

// In alphabetical order

export type Action = {
	type: string;
	payload: any;
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

export const initialTask: InitialTask = {
	name: "",
	deadline: "dd / mm / yyyy",
	topic: "default",
	description: "",
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
	id: string;
	name: string;
	deadline: Date;
	topic: string;
	description?: string;
	priority?: boolean;
	completed?: boolean;
};

export type TaskProp = {
	task: Task;
};

export type Tasks = Task[];

export type TimerDisplay = "Work" | "Break";
