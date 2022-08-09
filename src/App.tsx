import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
	return (
		<div className="App">
			<header className="flex flex-row justify-between shadow-md h-28 top-0 fixed w-screen items-center gap-4 p-6 bg-whiteTransparent">
				<h1 className="logo">Camp 6 Frontend Project</h1>
				<div className="flex flex-row gap-6">
					<h2>User</h2>
				</div>
			</header>

			<main className="background-gradient-option1 flex flex-row justify-between w-full h-screen gap-6 p-6">
				<div className="flex flex-col justify-between">
					<SideBar />
				</div>
				<div className="w-full overflow-y-auto">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
