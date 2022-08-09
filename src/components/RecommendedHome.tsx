export function RecommendedHome() {
  return (
    <>
      <h3 className="card-heading">Recommended For You</h3>
      <div className="flex flex-row gap-4 p5">
        <div className="w-1/3 h-5/6 flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluc3BpcmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
            className="cover"
          />
          <p>Headline 1</p>
        </div>
        <div className="w-1/3 h-5/6 flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zcGlyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            alt=""
            className="cover"
          />
          <p>Headline 2</p>
        </div>
        <div className="w-1/3 h-5/6 flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1659303388062-d61383748059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Qm4tRGpyY0Jyd298fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
            alt=""
            className="cover"
          />
          <p>Headline 3</p>
        </div>
      </div>
    </>
  );
}
