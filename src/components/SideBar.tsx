import { NavLink } from "react-router-dom";
import { FeedSVG } from "../assets/FeedSVG";
import { HomeSVG } from "../assets/HomeSVG";
import { ResourcesSVG } from "../assets/ResourcesSVG";
import { TracksSVG } from "../assets/TracksSVG";
import { Timer } from "./Timer";

interface NavigationItem {
  url: string;
  label: string;
  icon: JSX.Element;
}

const navigation: NavigationItem[] = [
  {
    url: "/",
    label: "Home",
    icon: <HomeSVG />,
  },
  {
    url: "/feed",
    label: "Feed",
    icon: <FeedSVG />,
  },
  {
    url: "/resources",
    label: "Resources",
    icon: <ResourcesSVG />,
  },
];

export default function SideBar() {
  const tracksList = tracksDummies.map((track, idx) => (
    <li key={idx}>
      <NavLink to={`/tracks/${track.id}`}>{track.title}</NavLink>
    </li>
  ));
  // TODO: put navigation into Array to make Navlink more maintainable

  return (
    <div className="flex h-full w-fit  flex-col justify-between">
      <div className=" flex flex-col gap-y-6">
        <nav className="flex h-fit w-full  flex-col items-start gap-6 rounded-xl bg-whiteTransparent p-6 shadow-md">
          {navigation.map((item) => (
            <NavLink
              key={item.url}
              className="navlink flex h-5 flex-row gap-6 text-customTextColorDark"
              to={item.url}
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex h-fit w-full flex-col items-start gap-2 rounded-xl bg-whiteTransparent p-6 shadow-md">
          <NavLink
            end
            className="navlink flex h-5 flex-row gap-6 text-customTextColorDark "
            to="/tracks"
          >
            <TracksSVG /> Tracks
          </NavLink>
          <ul className="relative left-12 leading-7 text-customTextColorDark ">
            {tracksList}
          </ul>
        </div>
      </div>

      <div className="h-fit w-fit">
        <Timer />
      </div>
    </div>
  );
}
