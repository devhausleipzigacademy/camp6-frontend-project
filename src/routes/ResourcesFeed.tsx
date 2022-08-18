import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { titleCase } from "title-case";
import { dbAxios } from "../utilities/axios";

export function ResourcesFeed() {
  const { track } = useParams();
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    try {
      (async ()=>{
        const resources = await dbAxios.get(`/resources?track=${track}`)
        setResources(resources.data);
      })()
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <div className="  flex flex-col items-center    gap-5   ">
      <h2 className="text-4xl font-bold">{titleCase(track!)}</h2>
      {resources.map((x, idx) => (
        <div key={x.id.toString()} className="flex flex-col w-[50%]">
          <img src={x.data.image} className=" rounded-lg h-full" />
        </div>
      ))}
    </div>
  );
}
