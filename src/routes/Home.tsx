import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StatusHome } from ".././components/StatusHome";
import { TaskListHome } from ".././components/TaskListHome";
import { IsButtonShownContext } from "../App";
import { RecommendedHome } from "../components/RecommendedHome";
import { TasksProvider } from "../components/TasksContext";
import { User } from "../types/user";
import { dbAxios, useUser } from "../utilities/axios";

export default function Home() {
  //TODO: Create auth so that we don't have to hard code here
  const userId = 1234;

  const isButtonShown = useContext(IsButtonShownContext);

  const user = useUser(userId);
  
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <h2 className=" text-2xl font-light ">Welcome back, {user.name}!</h2>

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
