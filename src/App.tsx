import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
}
