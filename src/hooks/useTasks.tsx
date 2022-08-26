import { useEffect, useState } from "react";
import { Tasks } from "../types/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Tasks>([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((res) => setTasks(res));
  }, []);

  return tasks;
}
