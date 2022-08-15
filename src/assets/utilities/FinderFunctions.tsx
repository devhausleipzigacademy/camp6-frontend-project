import { userData } from "../../database/newDummies";
import { Task, Topic, Track } from "../../database/TypesNConsts";

export function TrackFinder(trackId: number): Track {
	const selectedTrack = userData.tracks.find(
		(element) => element.id === trackId
	) as Track;

	return selectedTrack;
}

export function TopicFinder(trackId: number, topicId: number): Topic {
	const selectedTrack = userData.tracks.find(
		(element) => element.id === trackId
	) as Track;

	const selectedTopic = selectedTrack.topics.find(
		(element) => element.id === topicId
	) as Topic;

	return selectedTopic;
}

export function TaskFinder(trackId: number, topicId: number): Task {
	const selectedTrack = userData.tracks.find(
		(element) => element.id === trackId
	) as Track;

	const selectedTopic = selectedTrack.topics.find(
		(element) => element.id === topicId
	) as Topic;

	return selectedTopic.tasks[0];
}
