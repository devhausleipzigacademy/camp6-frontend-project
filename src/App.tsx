import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Header } from "./components/Header";

export default function App() {
	return (
		<div className="App">
			<div
				id="background"
				className="background-gradient-option2 fixed -z-10 h-screen w-screen  "
			></div>
			<header className="flex flex-row justify-between shadow-md h-20 top-0 fixed w-screen items-center gap-4 p-6 bg-whiteTransparent">
				<Header />
			</header>

			<main className="background-gradient-option2 flex flex-row justify-between w-full h-screen gap-6 p-6 pt-24 ">
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
