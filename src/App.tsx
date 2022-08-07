import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
// import { AddTaskButton } from "./components/buttons/AddTaskButton";

export default function App() {
	return (
		<div className="App  ">
			<div
				id="background"
				className=" background-gradient-option1 fixed -z-10 h-screen w-screen  "
			></div>
			<header className="flex flex-row justify-between shadow-md h-28 top-0 sticky w-screen      items-center gap-4 p-6 bg-whiteTransparent">
				<h1 className="logo">Camp 6 Frontend Project</h1>
				<div className="flex flex-row gap-6 ">
					{/* <AddTaskButton /> */}
					<h2>User</h2>
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
			<img
				className="p-28  "
				src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1"
				alt=""
			/>
		</div>
	);
}
