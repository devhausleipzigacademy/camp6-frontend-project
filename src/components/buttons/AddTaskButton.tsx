import { useEffect, useState } from "react";
import { PlusSVG } from "../../assets/PlusSVG";
import { TaskForm } from "../TaskForm";
import { TasksProvider } from "../TasksContext";

export function AddTaskButton() {
	const [formVisible, SetFormVisible] = useState(true);

	let formOverlay;

	// render the Form when FormVisible is set to true
	useEffect(() => {
		if (formVisible) {
			formOverlay = (
				<>
					<div className="bg-black w-screen h-5/6 bottom-0 opacity-100 absolute z-10 ">
						{/* <TasksProvider>
							anyone there?
							<TaskForm />
						</TasksProvider> */}
					</div>
				</>
			);
		}
	}, [formVisible]);

	return (
		<>
			<button className="bg-primarylight flex flex-row justify-evenly rounded-full p-2 w-80     h-10  ">
				{" "}
				<div className="h-full w-full p-1 ">
					<PlusSVG />
				</div>{" "}
				<p>Add Task</p>
			</button>

			{formOverlay}
		</>
	);
}
