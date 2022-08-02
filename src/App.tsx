import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="App">
      <div className="flex flex-row top-0 left-0 w-screen h-screen">
        <div className="flex flex-col top-0 left-0 w-1/6 h-screen bg-red-600">
          <SideBar />
        </div>
        <div className="flex flex-row top-0 left-0 w-5/6 h-screen bg-teal-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
