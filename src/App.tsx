import { TaskForm } from "./components/TaskForm";
import { TasksProvider } from "./components/TasksContext";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import { CrossSVG } from "./assets/CrossSVG";
import { AddTaskButton } from "./components/buttons/AddTaskButton";
import { ProfilePicture } from "./components/ProfilePicture";

export default function App() {
  // For the AddTaskButton
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div className="App overflow-hidden">
      <div
        id="background"
        className="background-gradient-option2 fixed -z-10 h-screen w-screen  "
      ></div>
      {formVisible ? <FormOverlay setFormVisible={setFormVisible} /> : null}
      <header className="flex h-20 items-center justify-between bg-whiteTransparent p-6 shadow-md">
        <h1 className="logo text-2xl font-bold text-customTextColorDark">
          SmartyPantsify
        </h1>
        <div className="flex gap-8">
          <AddTaskButton
            clickHandler={() => {
              setFormVisible(!formVisible);
            }}
          />
          <ProfilePicture />
        </div>
      </header>

      <div className="flex h-[calc(100vh-7rem)] w-full justify-between gap-6 p-6">
        <SideBar />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      {/* <img
				className="p-28  "
				src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1"
				alt=""
			/> */}
    </div>
  );
}

interface FormOverlayProps {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormOverlay({ setFormVisible }: FormOverlayProps) {
  return (
    <div className="fixed z-10 flex h-screen w-screen items-center justify-center bg-customTextColorLight text-customTextColorDark">
      <div className="card-style absolute h-3/5 w-2/5  rounded-md  bg-white ">
        <button
          className="absolute left-[calc(100%-2.5rem)] top-6 h-3 w-3 "
          onClick={() => {
            setFormVisible(false);
          }}
        >
          {" "}
          <CrossSVG />{" "}
        </button>
        {/* <TasksProvider> */}
        <TaskForm />
        {/* </TasksProvider> */}
      </div>
    </div>
  );
}
