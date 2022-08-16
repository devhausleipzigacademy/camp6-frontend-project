export type Task = {
  id: number | string;
  name: string;
  deadline: Date;
  topic: string;
  description?: string;
  priority?: boolean;
  completed?: boolean;
  timeSpentInMinutes?: number;
};

export type TaskProp = {
  task: Task;
};

export type Tasks = Task[];
