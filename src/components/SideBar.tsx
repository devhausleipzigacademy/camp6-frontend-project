import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col">
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/tracks">Tracks</NavLink>
      <NavLink to="/topics">Topics</NavLink>
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to="/resources">Resources</NavLink>
    </div>
  );
}
