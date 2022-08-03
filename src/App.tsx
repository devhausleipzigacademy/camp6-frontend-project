import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { Timer } from "./components/Timer";
import { TasksProvider } from "./components/TasksContext";

export default function App() {
	return (
		<div className="App">
			<h1 className="heading">Camp 6 Frontend Project</h1>
			<h2>Personal Curriculum</h2>
			<h3 className="subheading">Features</h3>
			<p>
				Tracks <br />
				Topics <br /> Tasks <br /> To Do List <br /> Timer <br />
				API Feed <br /> Personal Archive <br /> Please check in later for
				updates!
			</p>

			<TasksProvider>
				<TaskForm />
				<TaskList />
			</TasksProvider>
			<Timer />
		</div>
	);
}
