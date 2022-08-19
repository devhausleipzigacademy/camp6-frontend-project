import { Track } from "../types/tracks";
import { useTracks } from "../utilities/axios";

export function StatusHome() {
  let taskCount = 0;
  let taskCompletedCount = 0;

  const tracks = useTracks();

  tracks.map((track: Track) => {
    track.topics.map((topic) => {
      topic.tasks.map((task) => {
        taskCount = taskCount + 1;
        if (task.completed) taskCompletedCount = taskCompletedCount + 1;
        return taskCount;
      });
    });
  });

  let taskCompletionPercentage = (taskCompletedCount / taskCount) * 100;

  let completionMessage =
    taskCompletionPercentage > 50
      ? "Great work! You’ve completed the majority of your tasks."
      : "You have completed less than half your tasks. Keep it up!";

  return (
    <>
      <h3 className="card-heading">Your Progress</h3>
      <div className="flex h-5/6 w-full flex-col items-center justify-between gap-2 p-4">
        <svg
          className="flex h-28 justify-center self-center fill-primary "
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" />
          <text
            className="fill-customTextColorMedium"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {taskCompletionPercentage}%
          </text>
        </svg>
        <p className="w-7/12 text-center text-xs">{completionMessage}</p>
      </div>
    </>
  );
}
