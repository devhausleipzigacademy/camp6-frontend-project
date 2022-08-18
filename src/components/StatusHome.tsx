import { Track } from "../types/tracks";

type StatusHomeProps = {
  track: Track
}

export function StatusHome({track}: StatusHomeProps) {
  const allTasks =
    track.tasksOpen.length + track.tasksFinished.length;

  const taskCompletionPercentage =
    (track.tasksOpen.length / allTasks) * 100;

  const completionMessage =
    taskCompletionPercentage > 50
      ? "Great work! You’ve completed the majority of your tasks."
      : "You have completed less than half your tasks. Keep it up!";

  return (
    <>
      <h3 className="card-heading">Your Progress</h3>
      <div className="p-4 gap-2 w-full h-5/6 flex flex-col items-center justify-between">
        <svg
          className="fill-primary h-28 flex self-center justify-center "
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
        <p className="text-xs w-7/12 text-center">{completionMessage}</p>
      </div>
    </>
  );
}
