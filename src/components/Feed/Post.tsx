import { useState } from "react";
import { ResourcesSVG } from "../../assets/ResourcesSVG";

type BookmarkIconProps = {
	isSaved: any;
	setIsSaved: any;
};

export function BookmarkIcon({ isSaved, setIsSaved }: BookmarkIconProps) {
	return <></>;
}

type PostProps = {
	data: any;
};

let redditUrl = "https://www.reddit.com/";
export function Post({ data }: PostProps) {
	const [isSaved, setIsSaved] = useState(true);

	return (
		<>
			<>
				<div className="h-full w-fit p-10 flex text-sm  border-2 border-black border-opacity-40 rounded-2xl relative text-black flex-col  bg-white">
					<BookmarkIcon isSaved={isSaved} setIsSaved={setIsSaved} />
					<button
						type="button"
						onClick={() => {
							setIsSaved((prev) => !prev);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-10  hover:scale-[120%]   focus:animate-bounce duration-200 w-10 ${
								isSaved ? "fill-red-900" : "fill-gray-400"
							} `}
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1"
						>
							<path
								fill=""
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</button>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 absolute -left-2 -top-7 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M7 11l5-5m0 0l5 5m-5-5v12"
						/>
					</svg>

					<p className="absolute text-xsm  -top-6  left-4">
						{data.ups} times p voted{" "}
					</p>
					<p className="text-[9px] absolute right-10 -top-4">
						{data.subreddit_name_prefixed}
					</p>
					<p className="  absolute top-1 text-[10px]">
						posted by u/{data.author}
					</p>
					<p className="font-medium ">{data.title}</p>
					<p>{data.selftext}</p>
					<a href={redditUrl + data.permalink}>
						<img
							className="h-6 hover:scale-[105%] absolute right-3 top-2"
							src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
							alt=""
						/>
					</a>
					<img
						className="h-[30rem]  self-center    rounded-2xl p-4 "
						src={data.url_overridden_by_dest}
						alt=""
					/>
					<p>{data.selftext}</p>
					<a href={redditUrl + data.permalink}>
						{" "}
						<p className="text-center hover:scale-[105%] hover:underline mt-2">
							{data.num_comments} <br /> comments{" "}
						</p>
					</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 self-center  w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</>
		</>
	);
}
