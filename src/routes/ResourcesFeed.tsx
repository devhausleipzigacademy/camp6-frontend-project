import { groupBy } from "lodash";
import { useEffect, useState } from "react";

export function ResourcesFeed() {
	const [groups, setGroups] = useState({});
	const [resources, setResources] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/resources")
			.then((res) => res.json())
			.then((res) => setResources(res));
	}, []);

	useEffect(() => {
		const groups = groupBy(resources, "track");
		console.log("groups", groups);
		setGroups(groups);
	}, [resources]);

	return (
		<div className="  flex flex-col items-center    gap-5   ">
			{resources.map((x, idx) => (
				<div className="flex flex-col w-[50%]">
					<img src={x.data.image} className=" rounded-lg h-full" />
				</div>
			))}
		</div>
	);
}
