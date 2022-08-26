import { useEffect, useState } from "react";
import { Task, Tasks } from "../types/tasks";

async function getTasks(trackId?: number) {
  const tasks: Task[] = await fetch("http://localhost:3000/tasks").then((res) =>
    res.json()
  );

  if (trackId) {
    const filteredTasks = tasks.filter((task) => task.trackId === trackId);
    return filteredTasks;
  }
  return tasks;
}

export function useTasks(trackId?: number) {
  const [tasks, setTasks] = useState<Tasks>([]);

  useEffect(() => {
    const tasks = getTasks(trackId).then((res) => setTasks(res));
  }, []);

  return tasks;
}
