import { ClockSVG } from "../assets/Clock";
import { ListItemUncheckedSVG } from "../assets/ListItemUnchecked";
import { StatusSVG } from "../assets/Status";
import { TopicsSVG } from "../assets/Topics";
import { borderColorsArray, tracksDummies } from "../database/newDummies";

type TrackListProps = {
  trackId: number;
  colorId: number;
  trackName: string;
  topicCount: number;
};

export function TrackCard({
  trackId,
  colorId,
  trackName,
  topicCount,
}: TrackListProps) {
  const selectedTrack = tracksDummies.find((item) => item.id === trackId);

  const trackCardBorder = `${borderColorsArray[colorId]}`;
  const classes = `flex p-3 rounded-t-md  justify-between items-center pb-2 gap-2 h-10 bg-greyTransparent max-w-4xl border-b-4 ${trackCardBorder}`;

  let tasksTotalWithinTrack = 0;

  let completedTasks = 0;
  let timeSpent = 0;

  selectedTrack.topics.forEach((topic) => {
    tasksTotalWithinTrack = tasksTotalWithinTrack + topic.tasks?.length;

    topic.tasks.forEach((task) => {
      if (task.completed == true) completedTasks++;
    });

    topic.tasks.forEach((task) => {
      timeSpent = timeSpent + task.timeSpentInMinutes;
      console.log("time spent in minutes: " + task.timeSpentInMinutes);
    });
  });

  const taskCompletionPercentage =
    (completedTasks / tasksTotalWithinTrack) * 100;

  return (
    <div className="pb-7">
      <div id={trackId} className={classes}>
        <h2 className="text-customTextColorDark font-subheading text-sm font-medium pl-5">
          {trackName}
        </h2>
      </div>

      <div className="bg-white rounded-b-md justify-between items-center h-20 max-w-4xl shadow flex flex-row px-16 ">
        <div className="flex flex-col gap-2 h-11 items-center w-fit ">
          <TopicsSVG />

          <p className="font-bodyText text-sm text-customTextColorDark ">
            {topicCount} Topics
          </p>
        </div>
        <div className="flex flex-col gap-2 h-11 items-center">
          <ListItemUncheckedSVG />
          <p className="font-bodyText text-sm text-customTextColorDark ">
            {tasksTotalWithinTrack} Tasks
          </p>
        </div>
        <div className="flex flex-col gap-2 h-11 items-center">
          <StatusSVG />
          <p className="font-bodyText text-sm text-customTextColorDark ">
            {Math.round(taskCompletionPercentage)}% done
          </p>
        </div>
        <div className="flex flex-col gap-2 h-11 items-center">
          <ClockSVG />
          <p className="font-bodyText text-sm text-customTextColorDark ">
            {timeSpent} min spent
          </p>
        </div>
      </div>
    </div>
  );
}
