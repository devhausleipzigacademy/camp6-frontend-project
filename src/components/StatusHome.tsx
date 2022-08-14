import { TrackFinder } from "../assets/utilities/FinderFunctions";
import { UserData } from "../database/TypesNConsts";
import { useUser } from "./Contexts/UserContext";

export function StatusHome() {
	const user = useUser() as UserData;
	const selectedTrack = TrackFinder(user.activeTrackId);

	let tasksTotalWithinTrack = 0;
	let completedTasks = 0;

	selectedTrack.topics.forEach((topic) => {
		tasksTotalWithinTrack = tasksTotalWithinTrack + topic.tasks?.length;

		topic.tasks.forEach((task) => {
			if (task.completed == true) completedTasks++;
		});
	});

	// Percentage of all tasks within a track
	const taskCompletionPercentage =
		(completedTasks / tasksTotalWithinTrack) * 100;

	let completionMessage;

	if (taskCompletionPercentage > 50) {
		completionMessage = (
			<p className="text-xs w-1/2">
				Great work! You’ve completed the majority of your tasks.
			</p>
		);
	} else {
		completionMessage = (
			<p className="text-xs w-7/12 text-center  ">
				You have completed less than half your tasks. Keep it up!
			</p>
		);
	}

	return (
		<>
			<h3 className="card-heading">Your Progress</h3>
			<div className="p-4 gap-2 w-full h-5/6 flex flex-col items-center justify-between">
				<svg
					className="fill-primary h-28 flex self-center justify-center "
					viewBox="0 0 120 120"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="60" cy="60" r="50" />
					<text
						className="fill-customTextColorMedium"
						x="50%"
						y="50%"
						dominantBaseline="middle"
						textAnchor="middle"
					>
						{taskCompletionPercentage.toFixed(0)}%
					</text>
				</svg>
				{completionMessage}
			</div>
		</>
	);
}
