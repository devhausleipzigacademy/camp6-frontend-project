import { Outlet } from "react-router-dom";
import Header from "./components/Header";

import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="App">
<Header/>
      <div className="flex  h-[100vh]  flex-row  ">

        <div className=" w-[25vw] h-full bg-slate-100">
          <SideBar />
        </div>
        <div className=" h-full   w-full  shadow-xl  shadow-black    bg-teal-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
