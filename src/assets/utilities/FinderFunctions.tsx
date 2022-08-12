import { tracksDummies } from "../../database/newDummies";
import { Topic, Track } from "../../database/TypesNConsts";

export function TrackFinder(trackId: number): Track {
  const selectedTrack = tracksDummies.find(
    (element) => element.id === trackId
  ) as Track;

  return selectedTrack;
}

export function TopicFinder(trackId: number, topicId: number): Topic {
  const selectedTrack = tracksDummies.find(
    (element) => element.id === trackId
  ) as Track;

  const selectedTopic = selectedTrack.topics.find(
    (element) => element.id === topicId
  ) as Topic;

  return selectedTopic;
}
