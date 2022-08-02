import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <div className="flex flex-row top-0 left-0 w-screen h-screen">
        <div className="flex flex-col top-0 left-0 w-1/6 h-screen bg-red-600">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/tracks">Tracks</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/feed">Feed</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </div>
        <div className="flex flex-row top-0 left-0 w-5/6 h-screen bg-teal-300">
          Content
        </div>
      </div>
    </div>
  );
}
