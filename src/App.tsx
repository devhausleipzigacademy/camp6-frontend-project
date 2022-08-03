import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { Timer } from "./components/Timer";
import { TasksProvider } from "./components/TasksContext";

export default function App() {
	return (
		<div className="App">
			<div className="flex flex-col items-center gap-4">
				<h1 className="heading">Camp 6 Frontend Project</h1>
				<h2>Personal Curriculum</h2>
				<h3 className="subheading">Features</h3>
			</div>

			<TasksProvider>
				{/* 
				// 
				FYI TaskForm and TaskList only work if wrapped in TasksProvider
				// 
				*/}
				<div className="border-solid border-2 border-primary w-1/2  mt-6">
					<h2 className="subheading">Task Form Component</h2>
					<TaskForm />{" "}
				</div>
				<h2 className="subheading  mt-6">Task List</h2>
				<TaskList />
			</TasksProvider>
			<div className="w-1/4  mt-6">
				<h2 className="subheading">Timer</h2>
				<Timer />
			</div>
		</div>
	);
}
