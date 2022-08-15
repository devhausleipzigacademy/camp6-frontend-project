import { TaskForm } from "./components/TaskForm";
import { TasksProvider } from "./components/TasksContext";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { CrossSVG } from "./assets/CrossSVG";
import { AddTaskButton } from "./components/buttons/AddTaskButton";
import { ProfilePicture } from "./components/ProfilePicture";

export default function App() {
	// For the AddTaskButton
	const [formVisible, SetFormVisible] = useState(false);
	let formOverlay;

	// render the Form when FormVisible is set to true

	if (formVisible) {
		formOverlay = (
			<>
				<div className=" bg-customTextColorLight  w-screen h-screen  fixed z-10 text-customTextColorDark flex justify-center items-center ">
					<div className="bg-white card-style absolute h-3/5  w-2/5  rounded-md ">
						<button
							className="w-3 h-3 absolute left-[calc(100%-2.5rem)] top-6 "
							onClick={() => {
								SetFormVisible(false);
							}}
						>
							{" "}
							<CrossSVG />{" "}
						</button>
						<TasksProvider>
							<TaskForm />
						</TasksProvider>
					</div>
				</div>
			</>
		);
	}

	return (
		<div className="App">
			<div
				id="background"
				className="background-gradient-option1 fixed -z-10 h-screen w-screen  "
			></div>
			{formOverlay}
			<header className="flex flex-row justify-between shadow-md h-20 top-0 sticky w-screen      items-center gap-4 p-6 bg-whiteTransparent">
				<h1 className="logo font-bold text-2xl text-customTextColorDark">
					SmartyPantsify
				</h1>
				<div className="flex flex-row gap-8 ">
					<AddTaskButton
						clickHandler={() => {
							SetFormVisible(!formVisible);
						}}
					/>
					<ProfilePicture />
				</div>
			</header>

			<main className="flex  flex-row justify-between w-full h-[calc(100vh-7rem)] gap-6  p-6">
				<div className="flex flex-col justify-between">
					<SideBar />
				</div>

				<div className="w-full">
					{" "}
					<Outlet />
				</div>
			</main>
			{/* <img
				className="p-28  "
				src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1"
				alt=""
			/> */}
		</div>
	);
}
