import { TaskList } from "../components/TaskList";
import { TasksProvider } from "../components/TasksContext";

export default function Home() {
	return (
		<div className="flex flex-col items-center h-full w-full bg-whiteTransparent rounded-xl shadow-md">
			<span>Home</span>
			<TasksProvider>
				{/* 
				// 
				FYI TaskForm and TaskList only work if wrapped in TasksProvider
				// 
				*/}
				{/* <TaskForm /> */}
				<h2 className="subheading  mt-6">Task List</h2>

				<TaskList />
			</TasksProvider>
		</div>
	);
}
