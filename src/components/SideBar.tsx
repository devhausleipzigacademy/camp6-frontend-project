import { NavLink } from "react-router-dom";
import { FeedSVG } from "../assets/FeedSVG";
import { HomeSVG } from "../assets/HomeSVG";
import { ResourcesSVG } from "../assets/ResourcesSVG";
import { TracksSVG } from "../assets/TracksSVG";
import { tracksDummies } from "../database/Dummies";
import { Timer } from "./Timer";

export default function SideBar() {
  const tracksList = tracksDummies.map((track, idx) => (
    <li key={idx}>{track}</li>
  ));

	return (
		<>
			<div className="flex h-full w-fit  flex-col mt-32 justify-between ">
				<nav className="flex flex-col items-start  h-fit w-full shadow-md rounded-xl bg-whiteTransparent gap-6 p-6">
					<NavLink className="navlink h-5 flex flex-row gap-6" to="/">
						{" "}
						<HomeSVG /> Home
					</NavLink>
					<NavLink className="navlink h-5 flex flex-row gap-6" to="/feed">
						<FeedSVG /> Feed
					</NavLink>
					<NavLink className="navlink h-5 flex flex-row gap-6" to="/resources">
						<ResourcesSVG /> Resources
					</NavLink>
				</nav>
				<div className="flex flex-col items-start h-fit w-full shadow-md rounded-xl bg-whiteTransparent gap-2 p-6">
					<NavLink className="navlink h-5 flex flex-row gap-6" to="/tracks">
						<TracksSVG /> Tracks
					</NavLink>
					<ul className="relative left-12 leading-7  ">{tracksList}</ul>
				</div>
				<div className="w-fit h-fit">
					<Timer />
				</div>
			</div>
		</>
	);
}
