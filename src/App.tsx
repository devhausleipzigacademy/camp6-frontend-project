import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Header } from "./components/Header";
import { UserProvider, useUser } from "./components/Contexts/UserContext";
import { UserData } from "./database/TypesNConsts";

export default function App() {
	const user = useUser() as UserData;

	return (
		<div className="App">
			<UserProvider>
				<div
					id="background"
					className="background-gradient-option2 fixed -z-10 h-screen w-screen  "
				></div>
				<header className="flex flex-row justify-between shadow-md h-20 top-0 fixed w-screen items-center gap-4 p-6 bg-whiteTransparent">
					<Header />
				</header>

				<main className="background-gradient-option1 flex flex-row justify-between w-full h-screen gap-6 p-6 pt-24">
					<div className="flex flex-col justify-between">
						<SideBar />
					</div>
					<div className="w-full overflow-y-auto">
						<Outlet />
					</div>
				</main>
			</UserProvider>
		</div>
	);
}
