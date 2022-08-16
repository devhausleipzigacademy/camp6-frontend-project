import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { titleCase } from "title-case";

export function ResourcesFeed() {
  const { track } = useParams();
  const [resources, setResources] = useState<any[]>([]);

  async function getResources() {
    await fetch(`http://localhost:3000/resources?track=${track!}`)
      .then((res) => res.json())
      .then((res) => {
        setResources(res);
        return res;
      });
  }

  useEffect(() => {
    getResources();
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
