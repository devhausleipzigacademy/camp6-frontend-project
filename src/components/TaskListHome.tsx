import { TaskProp, Tasks, CreateContext } from "../database/TypesNConsts";
import { ACTIONS, useTasks, useTasksDispatch } from "./TasksContext";

export function TaskListHome() {
  const tasks = useTasks() as Tasks;

  if (tasks == undefined || tasks == null) {
    return <p>Oops, looks like you haven't added anything yet</p>;
  }

  return (
    <div className="">
      <h3 className="card-heading">Upcoming Tasks</h3>
      <ul className="px-4 py-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex p-3 border-r border-b rounded-md  justify-between items-center gap-2 h-10 bg-white"
          >
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function TaskItem({ task }: TaskProp) {
  // I will probably need these here
  const dispatch = useTasksDispatch() as CreateContext;

  const date = JSON.stringify(task.deadline).slice(1, 11);

  return (
    <>
      <div className="flex flex-row w-full h-full gap-5 items-center">
        <input
          type="checkbox"
          name="completed"
          onChange={() => {
            dispatch({ type: ACTIONS.COMPLETED, payload: { id: task.id } });
          }}
        />

        <p className="text-s">{task.name}</p>

        <p className="text-xs text-customTextColorLight ">Due: {date}</p>
      </div>
    </>
  );
}
