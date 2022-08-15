import { TrackCard } from "../components/TrackCard";
import { tracksDummies } from "../database/newDummies";
import { borderColorsArray } from "../database/newDummies";

export default function TracksOverview() {
  return (
    <div className=" pb-7 pl-12 pt-10 ">
      <ul>
        {tracksDummies.map((track, index) => (
          <TrackCard
            trackId={track.id}
            colorId={index % borderColorsArray.length}
            trackName={track.title}
            topicCount={track.topics.length}
          />
        ))}
      </ul>
    </div>
  );
}
