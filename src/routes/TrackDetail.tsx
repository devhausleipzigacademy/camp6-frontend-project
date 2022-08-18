import { useParams } from "react-router-dom";
import { findTrack } from "../utilities/FinderFunctions";
import { TopicCard } from "../components/TopicCard";
import { borderColorsArray } from "../components/TrackCard";
import { Track } from "../types/tracks";
import { useEffect, useState } from "react";
import { dbAxios } from "../utilities/axios";

type TrackParams = {
  trackId?: string
}

export function TrackDetail() {
  const { trackId }: Readonly<TrackParams> = useParams();

  const [track, setTrack] = useState({} as Track)

  useEffect(() => {
    try {
      (async () => {
        const track = await dbAxios.get(`/track/${trackId}`);
        setTrack(track.data)
      })()
    } catch(error){
      console.log(error)
    }
  }, []);

  return (
    <div className=" pb-7 pl-12 ">
      <ul>
        <h2 className=" text-customTextColorDark font-heading font-normal text-2xl pb-4">
          {track.title}
        </h2>
        {track.topics.map((topic, index) => (
          <li key={index}>
            <TopicCard
              trackId={Number(trackId)}
              topicId={topic.id}
              colorId={index % borderColorsArray.length}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
