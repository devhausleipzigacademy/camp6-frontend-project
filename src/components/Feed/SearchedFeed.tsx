import { useEffect, useState } from "react";
import { Task } from "../../database/TypesNConsts";
import { data } from "autoprefixer";
import { Searchbar } from "./SearchBar";
import { setInterval } from "timers/promises";
import { Youtube } from "./Youtube/YoutubeConfig";
import { moveCursor } from "readline";
import { taskDummy, tasksDummies, tracksDummies } from "../../database/Dummies";

export default function SearchedFeed({ task }: any) {
	const [articles, setArticles] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("news");
	const [limit, setLimit] = useState("14");
	const [save, setSave] = useState("");

	useEffect(() => {
		fetch(`https://www.reddit.com/search.json?limit=${limit}&q=${query}&count=2
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
	}, [query]);

	let color = "";
	function colorChange() {
		color = "fill-red-300";

		console.log(color);
	}
	colorChange();
	function searchBar(e: any) {
		setSearch(e.target.value);
		e.preventDefault();
	}
	function submit(event: any) {
		event.preventDefault();
		setQuery(search);
	}

	console.log(query);

	function dropDown() {
		const drop = document.getElementById("dropDown");
	}
	let redditUrl = "https://www.reddit.com/";
	const [opacity, setOpacity] = useState("100");
	return (
		<div className=" ">
			<Youtube />

			<div className="flex flex-row mt-10 items-end justify-between">
				<div className="inline-block   relative w-64">
					<p>Filter by Tracks</p>
					<select
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						className=" appearance-none w-full  hover:bg-purple-200 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
					>
						<option value="">Select Track</option>
						{tracksDummies.map((track, ix) => (
							<option value={tracksDummies[ix]}>{tracksDummies[ix]}</option>
						))}
					</select>
					<div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-black text-black text mt-6 h-6 w-9"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				<form onSubmit={submit} className="w-full max-w-sm">
					<div className="flex items-center  border-b border-teal-500 py-2">
						<input
							onChange={searchBar}
							className="appearance-none bg-transparent border-none w-full text-gray-800  text-l font-medium mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="search"
							placeholder=" Reddit/r/..."
						/>
						<button
							className="flex-shrink-0 bg-teal-500
						hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
							type="submit"
						>
							Search
						</button>
					</div>
				</form>
			</div>

			<div className="flex  relative flex-col  pl-10 h-full w-full mt-20 no-scrollbar items-center justify-evenly  gap-20">
				{articles
					.filter((post) =>
						!post.data.is_gallery &&
						post.data.domain === "i.imgur.com" &&
						post.data.domain === "i.redd.it"
							? false
							: true && !post.data.is_video
					)
					.map((post) => (
						<>
							<div className="h-full w-fit p-10 flex text-sm    rounded-2xl relative text-black flex-col  bg-white">
								<p className="font-medium ">{post.data.title}</p>
								<p>{post.data.selftext}</p>
								<a href={redditUrl + post.data.permalink}>
									<img
										className="h-6 hover:scale-[105%] absolute right-3 top-2"
										src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
										alt=""
									/>
								</a>
								<img
									className="h-[25rem] w-fit self-center    rounded-2xl p-4 "
									src={post.data.url}
									alt=""
								/>
								<p>{post.data.selftext}</p>
							</div>
						</>
					))}
			</div>
		</div>
	);
}

// 	<div className="relative">
// <svg xmlns="http://www.w3.org/2000/svg" className="h-6 hover:fill-green-400 active:fill-purple-500 right-12 top-5 z-10 absolute w-6" fill="gray" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
// </svg>
// 	<iframe className="border-2 relative hover:scale-[100.8%] duration-200 rounded-xl flex  border-black border-opacity-25   shadow-inner shadow-black " id="reddit-embed embed-responsive"  src={`https://www.redditmedia.com/${x.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true;&autoplay=false` } sandbox="allow-scripts allow-orientation-lock allow-same-origin"  height="600" width="900"   do-not-allow="autoplay" scrolling="no"></iframe>

//

// </div>
//))}

{
	/* <iframe
className="border-2    relative  rounded-2xl flex   "
id="reddit-embed embed-responsive"
src={`https://www.redditmedia.com/${post.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true;&autoplay=false`}
sandbox="allow-scripts allow-orientation-lock allow-same-origin"
height="520"
width="900"
do-not-allow="autoplay"
scrolling="no"
></iframe> */
}
