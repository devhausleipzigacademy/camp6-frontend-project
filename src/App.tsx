import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { Timer } from "./components/Timer";
import { TasksProvider } from "./components/TasksContext";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { AddTaskButton } from "./components/buttons/AddTaskButton";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <div
        id="background"
        className="background-gradient-option1 fixed -z-10 h-screen w-screen  "
      ></div>
      <header className="flex flex-row justify-between shadow-md h-20 top-0 sticky w-screen      items-center gap-4 p-6 bg-whiteTransparent">
        <Header />
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
