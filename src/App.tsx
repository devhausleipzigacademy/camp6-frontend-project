import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { Timer } from "./components/Timer";
import { TasksProvider } from "./components/TasksContext";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
	return (
		<div className="App">
			<header className="flex flex-col items-center gap-4 bg-primary">
				<h1 className="heading">Camp 6 Frontend Project</h1>
				<h2>Personal Curriculum</h2>
				<h3 className="subheading">Features</h3>
			</header>

			<main className="flex">
				<div className="flex flex-col w-1/6 h-screen bg-slate-400">
					<SideBar />
				</div>
				<div className="flex flex-col items-center w-5/6 h-screen bg-customGreen ">
					<TasksProvider>
						{/* 
				// 
				FYI TaskForm and TaskList only work if wrapped in TasksProvider
				// 
				*/}
						<div className="border-solid border-2 border-primary  mt-6">
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
					<Outlet />
				</div>
			</main>
		</div>
	);
}
