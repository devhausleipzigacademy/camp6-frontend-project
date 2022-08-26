import { StatusHome } from ".././components/StatusHome";
import { RecommendedHome } from "../components/RecommendedHome";
import { TaskListHome } from "../components/TaskListHome";
import { useUser } from "../utilities/axios";

export default function Home() {
  //TODO: Create auth so that we don't have to hard code here
  const userId = 1234;

  const user = useUser(userId);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <h2 className=" text-2xl font-light ">Welcome back, {user.name}!</h2>

      <div id="upperElements" className="flex h-80 w-full flex-row gap-4 ">
        <div id="upcomingTasks" className=" card-style h-full w-2/3">
          <TaskListHome />
        </div>
        <div id="statusBoard" className="card-style h-full  w-1/3">
          <StatusHome />
        </div>
      </div>
      <div id="recommendedBlogposts" className="card-style h-96 w-full">
        <RecommendedHome />
      </div>
    </div>
  );
}
