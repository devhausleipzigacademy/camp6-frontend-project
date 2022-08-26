import { borderColorsArray, TrackCard } from "../components/TrackCard";

import { useTracks } from "../utilities/axios";

export default function TracksOverview() {
  const tracks = useTracks();

  return (
    <div className=" pb-7 pl-12 pt-10 ">
      <ul>
        {tracks.map((track, index) => (
          <TrackCard
            key={track.id}
            track={track}
            colorId={index % borderColorsArray.length}
          />
        ))}
      </ul>
    </div>
  );
}
