import { useParams } from "react-router-dom";
import { TrackFinder } from "../assets/utilities/FinderFunctions";
import { TasksProvider } from "../components/Contexts/TasksContext";
import { TopicsProvider } from "../components/Contexts/TopicsContext";
import {
	USER_ACTIONS,
	useUser,
	useUserDispatch,
} from "../components/Contexts/UserContext";
import { TopicCard } from "../components/TopicCard";
import { colorsArray } from "../database/newDummies";
import { CreateContext, UserData } from "../database/TypesNConsts";

export function TrackDetail() {
	const { trackId } = useParams();

	const user = useUser() as UserData;
	const userDispatch = useUserDispatch() as CreateContext;

	const trackIdNumb = parseInt(trackId);
	userDispatch({
		type: USER_ACTIONS.SELECT_TRACK,
		payload: { trackId: trackIdNumb },
	});

	const selectedTrack = TrackFinder(trackIdNumb);

	return (
		<div className=" pb-7 pl-12 ">
			<ul>
				<h2 className=" text-customTextColorDark font-heading font-normal text-2xl pb-4 ">
					{selectedTrack.title}
				</h2>
				{selectedTrack.topics.map((topic, index) => (
					<li key={index}>
						<TopicsProvider trackId={user.activeTrackId}>
							<TasksProvider
								trackId={user.activeTrackId}
								topicId={user.activeTopicId}
							>
								<Top1icCard
									trackId={trackIdNumb}
									topicId={topic.id}
									colorId={index % colorsArray.length}
								/>
							</TasksProvider>
						</TopicsProvider>
					</li>
				))}
			</ul>
		</div>
	);
}
