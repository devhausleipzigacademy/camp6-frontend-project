import { useEffect, useState } from "react";
import { tracksDummies } from "../../database/newDummies";
import { resourcesList } from "../Feed/Post";
import { groupBy } from "lodash";

export function Resources() {
  // let array = new Array(20).fill("https://cataas.com/cat", 0);
  // console.log(array);
  const [resources, setResources] = useState([]);
  const [groups, setGroups] = useState({});
  const [limit, setLimit] = useState(10);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/resources")
      .then((res) => res.json())
      .then((res) => setResources(res));
  }, []);

  useEffect(() => {
    const groups = groupBy(resources, "track");
    console.log("groups", groups);
    setGroups(groups);
  }, [resources]);
  // console.log(resourcesList);
  useEffect(() => {
    fetch(`https://www.reddit.com/search.json?limit=2&q=RandomPics
		`).then((result) => {
      if (result.status != 200) {
        console.log("ERRPORR, BRUVVV");
      }
      result.json().then((datas) => {
        if (datas != null) {
          setArticles(datas.data.children);
        }
      });
    });
  });

  let height = tracksDummies.length;

  function resourceFolders() {}

  return (
    <div className="  grid grid-flow-col   gap-5  grid-cols-3 grid-rows-2 ">
      {Object.entries<any[]>(groups).map(([track, resourcesArr]) => (
        <div>
          <h2>{track}</h2>
          {resourcesArr.map((resource) => (
            <p>{resource.data.text}</p>
          ))}
        </div>
      ))}
      {/* {resourcesList.map((folders, indx) => (
        <>
          <div id="" className="grid   w-full  p-2  rounded-xl bg-slate-200">
            <div className="flex flex-row gap-x-3    items-center  ">
              <h1 className="text-3xl  mb-5 ml-2">{folders}</h1>
              <p className="text-xs">27 items</p>
            </div>
            <div className="grid rounded-lg  grid-cols-4 p-1 grid-rows-4 gap-5 h-fit  bg-blue-300">
              {resources
                .map((item, index) => (
                  <img
                    src={item}
                    className={`h-full rounded-xl w-full ${
                      index <= 2
                        ? "row-span-2 col-span-2"
                        : "row-span-1 col-span-1"
                    }`}
                  />
                ))
                .splice(0, 7)}
            </div>
            <button className="py-2  px-6 w-fit rounded-xl my-5 self-end bg-orange-400 ">
              See All
            </button>
          </div>
        </>
      ))} */}
    </div>
  );
}
