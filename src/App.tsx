import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Header } from "./components/Header";

export default function App() {
	return (
		<div className="App">
			<header className="flex flex-row justify-between shadow-md h-28 top-0 fixed w-screen items-center gap-4 p-4   bg-whiteTransparent">
				<h1 className="logo">Camp 6 Frontend Project</h1>

				<Header />


			</header>

			<main className="background-gradient-option1 pt-34 flex flex-row justify-between w-full h-screen gap-6 p-6">
				<div className="flex flex-col justify-between">
					<SideBar />
				</div>
				<div className="w-full no-scrollbar overflow-y-auto">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
