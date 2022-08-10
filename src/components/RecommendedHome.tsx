import { ResourcesSVG } from "../assets/ResourcesSVG";

export function RecommendedHome() {
  return (
    <>
      <h3 className="card-heading">Recommended For You</h3>
      <div className="flex flex-row gap-4 px-2">
        <RecommendedItem
          link="#"
          image="./src/assets/RecommendedOne.jpeg"
          title="The 2 best gadgets for drawing a curly line (spoiler: it will cost you a fortune)"
          recommendationCount="3001"
        />
        <RecommendedItem
          link="#"
          image="./src/assets/RecommendedTwo.jpeg"
          title="Pinching an image has never been easier with this simple trick"
          recommendationCount="2581"
        />
        <RecommendedItem
          link="#"
          image="./src/assets/RecommendedThree.jpeg"
          title="“Look, I can draw shapes”, is what this person wants to tell us"
          recommendationCount="2338"
        />
      </div>
    </>
  );
}

function RecommendedItem({ image, link, title, recommendationCount }: any) {
  return (
    <>
      <div className="flex flex-col w-full h-full gap-y-3 px-1 items-center ">
        <div>
          <a href={link}>
            <img className="cover rounded" src={image} />
          </a>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-4/5 flex ">
            <h3 className="text-xs text-customTextColorMedium font-medium font-bodyText ">
              <a href={link}>{title}</a>
            </h3>
          </div>
          <div className="flex flex-row w-1/5 items-baseline gap-1 justify-end">
            <div className="h-3 fill-customTextColorLight flex self-baseline">
              <ResourcesSVG />
            </div>
            <p className="text-xs text-customTextColorLight font-bodyText">
              {recommendationCount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
