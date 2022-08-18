import { TrackCard, borderColorsArray } from "../components/TrackCard";

import { useEffect, useState } from "react";
import { Tracks } from "../types/tracks";
import { dbAxios } from "../utilities/axios"

export default function TracksOverview() {
  const [tracks, setTracks] = useState([] as Tracks)

  useEffect( () => {
    try{
      (async () => {
        const tracks = await dbAxios.get('/tracks')
        setTracks(tracks.data)
      })()
    } catch(error){
      console.log(error)
    }
  }, [])

  return (
    <div className=" pb-7 pl-12 pt-10 ">
      <ul>
        {tracks.map((track, index) => (
          <TrackCard track={track} colorId={index % borderColorsArray.length} />
        ))}
      </ul>
    </div>
  );
}
