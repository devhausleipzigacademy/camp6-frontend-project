import { RecommendedHome } from "../components/RecommendedHome";
import { StatusHome } from "../components/StatusHome";
import { TaskList } from "../components/TaskList";
import { TaskListHome } from "../components/TaskListHome";
import { useUser } from "../components/Contexts/UserContext";
import { UserData } from "../database/TypesNConsts";
import { TasksProvider } from "../components/Contexts/TasksContext";
import { TopicsProvider } from "../components/Contexts/TopicsContext";
import { TracksProvider } from "../components/Contexts/TracksContext";

export default function Home() {
	const user = useUser() as UserData;

	return (
		<div className="flex flex-col gap-4 h-full w-full">
			<h2 className=" text-2xl font-light ">Welcome back, {user.name}! </h2>
			<TracksProvider>
				{" "}
				<TopicsProvider trackId={user.activeTrackId}>
					<TasksProvider
						trackId={user.activeTrackId}
						topicId={user.activeTopicId}
					>
						<div
							id="upperElements"
							className="w-full h-80 flex flex-row gap-4 "
						>
							<div id="upcomingTasks" className=" w-2/3 h-full card-style">
								{" "}
								<TaskListHome />
							</div>
							<div id="statusBoard" className="w-1/3 h-full  card-style">
								<StatusHome />
							</div>
						</div>
					</TasksProvider>
				</TopicsProvider>
			</TracksProvider>
			<div id="recommendedBlogposts" className="w-full h-96  card-style">
				<RecommendedHome />
			</div>
		</div>
	);
}
