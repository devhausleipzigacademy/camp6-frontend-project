import { TopicCard } from "../components/TopicCard";
import { TasksProvider } from "../components/TasksContext";
import { Outlet } from "react-router-dom";

export default function TracksOverview() {
  return (
    <div className="pl-10 min-w-min max-w-5xl ">
      <TasksProvider></TasksProvider>
    </div>
  );
}
