import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopicCard } from "../components/TopicCard";
import { borderColorsArray } from "../components/TrackCard";
import { Track } from "../types/tracks";
import { findTrack } from "../utilities/FinderFunctions";

type TrackParams = {
  trackId?: string;
};

export function TrackDetail() {
  const { trackId }: Readonly<TrackParams> = useParams();

  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/tracks/${trackId}`)
      .then((res) => res.json())
      .then((res) => setTrack(res));
  }, [trackId]);

  // const selectedTrack = findTrack(Number(trackId));

  // const [track, setTrack] = useState({} as Track)

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const track = await dbAxios.get(`/track/${trackId}`);
  //       setTrack(track.data)
  //     })()
  //   } catch(error){
  //     console.log(error)
  //   }
  // }, []);

  if (!track) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" pb-7 pl-12 ">
      <ul>
        <h2 className=" pb-4 font-heading text-2xl font-normal text-customTextColorDark">
          {track.title}
        </h2>
        {track.topics.map((topic, index) => (
          <li key={index}>
            <TopicCard
              topic={topic}
              colorId={index % borderColorsArray.length}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
