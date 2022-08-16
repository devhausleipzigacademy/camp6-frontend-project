import { RecommendedHome } from "../components/RecommendedHome";
import { StatusHome } from ".././components/StatusHome";
import { TaskListHome } from ".././components/TaskListHome";
import { TasksProvider } from "../components/TasksContext";
import { userDummy } from "../database/Dummies";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <h2 className=" text-2xl font-light ">Welcome back, {userDummy.name}!</h2>

      <div id="upperElements" className="w-full h-80 flex flex-row gap-4 ">
        <div id="upcomingTasks" className=" w-2/3 h-full card-style">
          <TasksProvider>
            <TaskListHome />
          </TasksProvider>
        </div>
        <div id="statusBoard" className="w-1/3 h-full  card-style">
          <StatusHome />
        </div>
      </div>
      <div id="recommendedBlogposts" className="w-full h-96 card-style">
        <RecommendedHome />
      </div>
    </div>
  );
}
