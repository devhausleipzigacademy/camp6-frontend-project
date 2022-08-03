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

export type Task = {
	id: string;
	name: string;
	deadline: Date;
	topic: string;
	description?: string;
	priority?: boolean;
	completed?: boolean;
};

export type Tasks = Task[];

export type TimerDisplay = "Work" | "Break";
