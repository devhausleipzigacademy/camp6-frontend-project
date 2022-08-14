import { useEffect, useState } from "react";
import { PlusSVG } from "../../assets/PlusSVG";

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
			<button className="bg-primary flex flex-row justify-evenly items-center rounded-md py-3 px-5 w-48 h-12">
				{" "}
				<div className=" h-2/3 w-auto">
					<PlusSVG />
				</div>{" "}
				<p className="font-bodyText text-lg ">Add Task</p>
			</button>

			{formOverlay}
		</>
	);
}
