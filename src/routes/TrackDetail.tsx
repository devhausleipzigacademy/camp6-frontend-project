import { useParams } from "react-router-dom";
import { TrackFinder } from "../assets/utilities/FinderFunctions";
import { TopicCard } from "../components/TopicCard";
import { borderColorsArray } from "../database/newDummies";

export function TrackDetail() {
  const { trackId } = useParams();

  //   @ts-expect-error
  const trackIdNumb = parseInt(trackId);

  const selectedTrack = TrackFinder(trackIdNumb);

  return (
    <div className=" pb-7 pl-12 ">
      <ul>
        <h2 className=" text-customTextColorDark font-heading font-normal text-2xl pb-4 ">
          {selectedTrack.title}
        </h2>
        {selectedTrack.topics.map((topic, index) => (
          <li key={index}>
            <TopicCard
              trackId={trackIdNumb}
              topicId={topic.id}
              colorId={index % borderColorsArray.length}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
