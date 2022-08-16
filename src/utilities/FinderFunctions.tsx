import { tracksDummies } from "../database/newDummies";
import { Topic, Track } from "../types/TypesNConsts";

export function findTrack(trackId: number): Track | undefined {
  return tracksDummies.find((element) => element.id === trackId);
}

export function findTopic(trackId: number, topicId: number): Topic | undefined {
  const selectedTrack = findTrack(trackId);

  return selectedTrack?.topics.find((element) => element.id === topicId);
}
