import { useParams } from "react-router-dom";
import { TopicCard } from "../components/TopicCard";
import { borderColorsArray } from "../components/TrackCard";
import { findTrack } from "../utilities/FinderFunctions";

type TrackParams = {
  trackId?: string;
};

export function TrackDetail() {
  const { trackId }: Readonly<TrackParams> = useParams();

  const selectedTrack = findTrack(Number(trackId));

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

  return (
    <div className=" pb-7 pl-12 ">
      <ul>
        <h2 className=" pb-4 font-heading text-2xl font-normal text-customTextColorDark">
          {selectedTrack?.title}
        </h2>
        {selectedTrack?.topics.map((topic, index) => (
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
