import {NavLink} from "react-router-dom";

export default function SideBar() {
	return (
		<div className="flex justify-between h-full flex-col ml-2 ">
			<div className="flex  flex-col text-start font-subheading font-bold gap-y-5 text-xl   h-full bg-slate-100  pt-28">
				<span>	&#xe88a; </span><NavLink to="/"> Home</NavLink>
				<NavLink to="/tracks">Tracks</NavLink>
				<NavLink to="/topics">Topics</NavLink>
				<NavLink to="/feed">Feed</NavLink>
				<NavLink to="/resources">Resources</NavLink>
			</div>
			<div className="h-20 w-64 self-center mt-4 bg-cyan-600">
      TIMER</div>
		</div>
	);
}
